import React, { useState, useEffect } from 'react';
import '../style/petdata.scss';
import Cat from '../images/cat.svg'
import Phone from '../images/phone-icon.svg'
import Whatsapp from '../images/wp-icon.svg'
import OwnerIcon from '../images/owner-icon.svg'

const LocationComponent = ({ petId }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [error, setError] = useState(null);
  const [konum, setKonum] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            if (!response.ok) {
              throw new Error('Konum bilgisi alınamadı.');
            }
            const data = await response.json();
            setLocationInfo(data);
            setKonum(data.display_name);
            // Backend'e konumu gönder
            sendLocationToBackend(data.display_name, petId);
          } catch (error) {
            console.error('Location error:', error);
            setError(error.message);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          setError('Konum bilgisi alınamadı.');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setError('Tarayıcı konum hizmetini desteklemiyor.');
    }// eslint-disable-next-line
  }, []);

  const sendLocationToBackend = async (location, petId) => {
    try {
      const response = await fetch('https://petid.com.tr/api/sendKonum.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location, pet_id: petId }), // pet_id değerini de gönder
      });
      if (!response.ok) {
        throw new Error('Konum backend\'e gönderilemedi.');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Backend error:', error);
    }
  };


  return (
    <>
      {locationInfo && (
        <p className="location-info">En Son Konum: <strong>{konum}</strong></p>
      )}
      {error && <p className="error-message">{error}</p>}
    </>
  );
};

const PetData = (props) => {
  const petData = props.petData
  return (
    <>
      <div className='w-100'>
        <img className='cat-image' src={Cat} alt='Kedi' />
      </div>
      <div className='info-box'>
        <div className='container-fluid'>
          <div className='container-fluid'>
            <h3>Merhaba, Ben {petData.pet_name}</h3>
            <p className='cins'>{petData.species}, {petData.breed}</p>
          </div>
          <div className='pet-info'>
            <div className='d-flex justify-content-around align-items-center'>
              <div className='box bg-box-1'>
                <p className='text-center'>{petData.gender}</p>
                <p className='text-center'>{petData.age} yaşında</p>
              </div>
              <div className='box bg-box-2'>
                <p className='text-center'>{petData.spayed ? `Kısır` : `Kısır değil`}</p>
                <p className='text-center'>{petData.weight} kg</p>
              </div>
              <div className='box bg-box-3'>
                <p className='text-center'><span>Hastalık:</span><br />{petData.illnesses}</p>
              </div>
            </div>
          </div>
          <div className='owner-info container-fluid'>
            <div className='row'>
              <div className='col-3 owner-icon'><img width={50} src={OwnerIcon} alt='Sahip' /></div>
              <div className='col-9 owner'>
                <p className='name'>Sahibim: {petData.owner_name}</p>
                <p className='tel'>Telefon: {petData.owner_phone}</p>
              </div>
            </div>
            <div className='call-owner mt-4'>
              <a href='/'>SAHİBİMİ ARA <img src={Phone} alt='Telefon' /></a>
            </div>
            <div className='wp-owner mt-3'>
              <a href='/'>WHATSAPP'TAN YAZ <img src={Whatsapp} alt='Whatsapp' /></a>
            </div>
          </div>
          <div className='vet-info container-fluid mt-4'>
            <p className='vet-name'>Veterinerim: {petData.vet_name}</p>
            <p className='vet-tel'>Telefon: {petData.vet_phone}</p>
          </div>
          <hr />
          <div className='container-fluid'>
            <p className='ekstra-bilgi'><strong>Ekstra Bilgi:</strong> {petData.additional_info}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='container p-4'>
        <LocationComponent petId={petData.id} />
      </div>
      <hr />
      <p className='footer-text'>PetID - NFC Destekli Evcil Hayvan Takip Sistemi</p>
    </>
  )
}

export default PetData
