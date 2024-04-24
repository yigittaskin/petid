import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PetForm = () => {
    const { id } = useParams(); // URL'den id parametresini al
    const [formData, setFormData] = useState({
        petid: id,
        petName: '',
        petSpecies: '',
        petBreed: '',
        petAge: '',
        petWeight: '',
        petGender: 'Erkek',
        petSpayed: false,
        petIllnesses: '',
        ownerName: '',
        ownerPhone: '',
        vetName: '',
        vetPhone: '',
        additionalInfo: ''
    });

    const [success, setSuccess] = useState(false);
    const [hata, setHata] = useState(false);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://petid.com.tr/api/createNewPet.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                setSuccess(true); // Form başarıyla gönderildiğinde success durumu true olarak güncellenir
            }
        } catch (error) {
            console.error('Form gönderiminde hata:', error);
            setHata(true);
        }
    };

    return (
        <>
            {!success && (
                <>
                    <h2 className='text-center p-5'>PETID</h2>
                    <h3 className='text-center color-purple mb-5'>Evcil Hayvanın için PetID Tasmanı Oluştur</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='input-box'>
                            <label htmlFor="petName">Evcil Hayvanın İsmi</label>
                            <input type="text" name="petName" id='petName' placeholder="Boncuk, Miya, Karabaş, Badem..." value={formData.petName} onChange={handleChange} />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="petSpecies">Evcil Hayvanın Türü</label>
                            <input type="text" name="petSpecies" id='petSpecies' placeholder="Kedi, Köpek, At, Papağan..." value={formData.petSpecies} onChange={handleChange} />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="petBreed">Evcil Hayvanın Cinsi</label>
                            <input type="text" name="petBreed" id='petBreed' placeholder="Tekir, Schotish, Golden, Kangal..." value={formData.petBreed} onChange={handleChange} />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="petAge">Evcil Hayvanın Yaşı</label>
                            <input type="number" name="petAge" id='petAge' placeholder="3, 4, 14, 21, 78..." value={formData.petAge} onChange={handleChange} />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="petWeight">Evcil Hayvanın Kilosu</label>
                            <input type="number" name="petWeight" id='petWeight' placeholder="3 KG, 5.30 KG, 87 KG..." value={formData.petWeight} onChange={handleChange} />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="petGender">Evcil Hayvanın Cinsiyeti</label>
                            <select className='form-control' name="petGender" id='petGender' value={formData.petGender} onChange={handleChange}>
                                <option value="Erkek">Erkek</option>
                                <option value="Dişi">Dişi</option>
                            </select>
                        </div>

                        <div className='form-check mt-3'>
                            <input className='form-check-input' type="checkbox" name="petSpayed" id='petSpayed' checked={formData.petSpayed} onChange={handleChange} />
                            <label className='form-check-label' htmlFor="petSpayed">Evcil hayvanınız kısır ise kutuyu işaretleyin.</label>
                        </div>

                        <div className='input-box'>
                            <label htmlFor="petIllnesses">Evcil Hayvanın Hastalıkları</label>
                            <textarea name="petIllnesses" id='petIllnesses' placeholder="Lösemi Hastası, Şeker Hastası, Sol ön patisi kırık..." value={formData.petIllnesses} onChange={handleChange} />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="ownerName">Sahibin Adı</label>
                            <input type="text" name="ownerName" id='ownerName' placeholder="İsim Soyisim" value={formData.ownerName} onChange={handleChange} />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="ownerPhone">Sahibin Telefon Numarası</label>
                            <input type="tel" name="ownerPhone" id='ownerPhone' placeholder="5XX XXX XX09" value={formData.ownerPhone} onChange={handleChange} />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="vetName">Veterinerin Adı</label>
                            <input type="text" name="vetName" id='vetName' placeholder="Veteriner Kliniğinin Adı veya Veteriner Ad Soyad" value={formData.vetName} onChange={handleChange} />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="vetPhone">Veterinerin Telefon Numarası</label>
                            <input type="tel" name="vetPhone" id='vetPhone' placeholder="5XX XXX XX08" value={formData.vetPhone} onChange={handleChange} />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="additionalInfo">Ekstra Bilgi</label>
                            <textarea name="additionalInfo" id='additionalInfo' placeholder="Evcil Hayvanınız kaybolursa bilmemiz gereken ekstra şeyler..." value={formData.additionalInfo} onChange={handleChange} />
                        </div>

                        <div className='text-center'>
                            <button className='btn bg-purple text-white my-3 w-50' type="submit">Gönder</button>
                        </div>
                    </form>
                </>
            )}
            {success && (
                <div className="contaner text-center">
                    <h3><span role="img" aria-label="success">&#9989;</span> Evcil hayvanınız başarıyla tanımlanmıştır. PETID kodunuz: {id}</h3>
                </div>
            )}
            {hata && (
                <div className="contaner text-center">
                    <h3>❌ Evcil hayvanınız tanımlanırken sorun oluştu. Lütfen tekrar deneyin.<span role="img" aria-label="success">&#9989;</span></h3>
                </div>
            )}
        </>
    );
};

export default PetForm;