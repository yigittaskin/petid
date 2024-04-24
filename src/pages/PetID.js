/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PetForm from '../components/PetForm';
import '../style/petid.scss';
import PetData from '../components/PetData';

const PetID = () => {
    const [petData, setPetData] = useState(null);
    const { id } = useParams(); // URL'den id parametresini al
    const petId = id;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Backend'e GET isteği yaparak id'ye ait verileri al
        fetch(`https://petid.com.tr/api/getPet.php?id=${petId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPetData(data);
                console.log(data)
                setLoading(false); // Veri alındıktan sonra yüklemeyi durdur
            })
            .catch(error => {
                setLoading(false); // Hata alındıktan sonra yüklemeyi durdur
            });
    }, [petId]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : petData ? (
                <>
                    <PetData petData = {petData} />
                </>
            ) : (
                <PetForm />
            )}
        </div>
    );
}

export default PetID;
