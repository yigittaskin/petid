import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import '../style/homepage.scss'
import HeroImage from '../images/hero.svg'
import GooglePlay from '../images/googleplay.svg'
import AppleStore from '../images/appstore.svg'
import InfoImage from '../images/info-image.svg'
import FeaturesImage from '../images/features.svg'
import Footer from '../components/Footer'

const Homepage = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Önceden belirlenmiş olayı durdur
      e.preventDefault();
      // Prompt olayını kaydet
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <>
      <Header page='HomePage' />
      {/* HERO SECTION */}
      <div className='container-fluid hero'>
        <div className='container-hero'>
          <div className='row align-items-center py-5 px-5'>
            <div className='col-md-6'>
              <div className='hero-content'>
                <div className='hero-box'>
                  <h1>PETID ile NFC Destekli Evcil Hayvan Takip Uygulaması</h1>
                  <p className='mt-3'>PetID, temel amaç olarak evcil hayvan sahipleri için hayvanlarının kaybolması veya acil durumlarda hızlı ve kolay bilgiye erişim sağlayan bir çözüm sunar.</p>
                  <div className='hero-download-box'>
                    <h4 className='mt-4 mb-2'>Şimdi İndir</h4>
                    <button id="install-app" onClick={handleInstallClick}><img src={GooglePlay} alt='Google Play' /></button>
                    <button id="install-app" onClick={handleInstallClick}><img src={AppleStore} alt='Apple Store' /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='hero-image'>
                <img src={HeroImage} alt='Hero' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* INFO SECTION */}
      <div id='hakkimizda' className='info container mt-5'>
        <div className='text-center'>
          <h2 className='mt-4'>PETID Hakkında Bilgi Edinin</h2>
          <p className='mt-3'>PetID, evcil hayvan sahipleri için hayvanlarının kaybolması veya acil durumlarda hızlı ve kolay bilgiye erişim sağlayan bir çözüm sunar. Bu sistem, NFC teknolojisini kullanarak evcil hayvanların tasmalarına entegre edilen bir çip üzerinden çalışır. Kullanıcılar, evcil hayvanlarıyla ilgili önemli bilgileri web ve mobil tabanlı bir uygulamaya yükleyebilir ve saklayabilirler. Bu bilgilere herhangi bir NFC destekli akıllı telefondan erişilebilir hale gelir, böylece evcil hayvanın tasma üzerindeki etiketini telefonlarına okutarak tüm bu bilgilere anında ulaşabilirler. Bu çözüm, sadece bir tasma üzerindeki etiketin okunmasıyla değil, aynı zamanda evcil hayvanın sağlık durumu, aşıları, veteriner bilgileri ve sahibiyle ilgili iletişim bilgileri gibi ayrıntılı ve güncel bilgilere de erişim sağlar.</p>
        </div>
        <div className='row align-items-center py-5 px-5'>
          <div className='col-md-6'>
            <div className='info-image'>
              <img src={InfoImage} alt='Bilgi Edin' />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='info-box'>
              <h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_10_15516)">
                  <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#5956E9" />
                </g>
                <defs>
                  <clipPath id="clip0_10_15516">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg> Evcil Hayvanını Güvende Tut</h3>
              <p>Evcil hayvanın hangi hastalıklara karşı aşılandığı veya hangi tür yiyecekleri tükettiği gibi sağlık ve beslenme detayları da PetID üzerinden paylaşılabilir. Böylece, kaybolan bir evcil hayvanın bulunması veya bir acil durumda tıbbi müdahale gerektiğinde, yetkililer ve bulan kişiler hızlıca ve doğru bir şekilde hareket edebilirler.</p>
            </div>
            <div className='info-box mt-5'>
              <h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_10_15516)">
                  <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#5956E9" />
                </g>
                <defs>
                  <clipPath id="clip0_10_15516">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg> Sağlıklı, Rahat ve Şık Tasma Tasarımı</h3>
              <p>NFC Çip entegre ettiğimiz tasmanın yapısı; epoksi, reç,ne ve sağlığa zararı olmayan, şık bir tasma ipi! Evcil hayvanınızın tamamen sağlıklı ve güvende. PetID tasması satın al, uygulamamızı indir ve sen de PetID ile evcil hayvanını korumaya al!</p>
            </div>
          </div>
        </div>
      </div>
      {/* PETID FEATURES */}
      <div id='bilgi' className='features container-fluid py-5'>
        <div className='container'>
          <div className='text-center text-white'>
            <h2 className='my-5'>PETID Özellikleri</h2>
            <p className='px-5'>PetID, evcil hayvan sahipleri için kaybolma durumunda veya acil bir durumda evcil hayvanları hakkında hızlı ve kolay bilgiye erişim sağlayan bir çözüm sunar. NFC teknolojisi kullanarak evcil hayvanların tasmalarına entegre edilen bir çip ile, kullanıcılar evcil hayvanlarıyla ilgili tüm önemli bilgileri web ve mobil tabanlı bir uygulamaya yükleyebilir ve saklayabilirler. Bu bilgilere herhangi bir NFC destekli akıllı telefon ile erişmek mümkün olacak, böylece evcil hayvanın tasma üzerindeki etiketini telefonlarına okutarak tüm bilgilere anında ulaşabilecekler.</p>
          </div>
          <div className='row align-items-center py-5'>
            <div className='col-md-4 feat'>
              <div className='features-box'>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.9686 3.36926H7.98254C4.42915 3.36926 1.53809 6.26033 1.53809 9.81372V30.6125C1.53809 34.159 4.41656 37.0449 7.95965 37.0569V46.4958L21.5229 37.0578H41.9686C45.522 37.0578 48.4131 34.1667 48.4131 30.6125V9.81372C48.4131 6.26033 45.522 3.36926 41.9686 3.36926ZM35.8669 27.54H14.0842V24.7935H35.8669V27.54ZM35.8669 21.6807H14.0842V18.9341H35.8669V21.6807ZM35.8669 15.8213H14.0842V13.0747H35.8669V15.8213Z" fill="white" />
                  </svg><span>Anında Ulaş</span>
                </div>
                <p>Evcil hayvanınızı birisi bulursa direkt size ulaşabilir vee evcil hayvanınız hakkında bilgi verebilir.</p>
              </div>
              <div className='features-box mt-5'>
                <div className='d-flex justify-content-between align-items-center mb-2'><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.0703 25H23.5352V23.5352C23.5352 22.7268 22.8786 22.0703 22.0703 22.0703C21.262 22.0703 20.6055 22.7268 20.6055 23.5352C20.6055 24.3435 21.262 25 22.0703 25Z" fill="white" />
                  <path d="M23.5352 27.9297C23.2403 27.9297 18.8457 27.9297 19.1406 27.9297C18.3323 27.9297 17.6758 28.5862 17.6758 29.3945V30.8594H23.5352V27.9297Z" fill="white" />
                  <path d="M29.3945 23.5352C29.3945 22.7268 28.738 22.0703 27.9297 22.0703C27.1214 22.0703 26.4648 22.7268 26.4648 23.5352V25H27.9297C28.738 25 29.3945 24.3435 29.3945 23.5352Z" fill="white" />
                  <path d="M23.5352 33.7891H20.6055V39.6484H29.3945V33.7891H26.4648V35.2539C26.4648 36.0634 25.8095 36.7188 25 36.7188C24.1905 36.7188 23.5352 36.0634 23.5352 35.2539V33.7891Z" fill="white" />
                  <path d="M0 44.043C0 46.4661 1.97144 48.4375 4.39453 48.4375H45.6055C48.0286 48.4375 50 46.4661 50 44.043V16.2109H0V44.043ZM14.7461 29.3945C14.7461 27.3689 16.1308 25.676 17.9985 25.1694C17.7944 24.6632 17.6758 24.1135 17.6758 23.5352C17.6758 21.1121 19.6472 19.1406 22.0703 19.1406C23.1998 19.1406 24.2207 19.5808 25 20.2835C25.7793 19.5808 26.8002 19.1406 27.9297 19.1406C30.3528 19.1406 32.3242 21.1121 32.3242 23.5352C32.3242 24.1135 32.2056 24.6632 32.0015 25.1694C33.8692 25.676 35.2539 27.3689 35.2539 29.3945V32.3242C35.2539 33.1337 34.5985 33.7891 33.7891 33.7891H32.3242V41.1133C32.3242 41.9228 31.6689 42.5781 30.8594 42.5781H19.1406C18.3311 42.5781 17.6758 41.9228 17.6758 41.1133V33.7891H16.2109C15.4015 33.7891 14.7461 33.1337 14.7461 32.3242V29.3945Z" fill="white" />
                  <path d="M32.3243 29.3945C32.3243 28.5862 31.6677 27.9297 30.8594 27.9297C30.5645 27.9297 26.17 27.9297 26.4649 27.9297V30.8594H32.3243V29.3945Z" fill="white" />
                  <path d="M45.6055 1.5625H4.39453C1.97144 1.5625 0 3.53394 0 5.95703V13.2812H50V5.95703C50 3.53394 48.0286 1.5625 45.6055 1.5625ZM7.32155 10.3516C6.51245 10.3516 5.8567 9.69582 5.8567 8.88672C5.8567 8.07762 6.51245 7.42188 7.32155 7.42188C8.13065 7.42188 8.78639 8.07762 8.78639 8.88672C8.78639 9.69582 8.13065 10.3516 7.32155 10.3516ZM13.2786 10.3516C12.4695 10.3516 11.8137 9.69582 11.8137 8.88672C11.8137 8.07762 12.4695 7.42188 13.2786 7.42188C14.0877 7.42188 14.7434 8.07762 14.7434 8.88672C14.7434 9.69582 14.0877 10.3516 13.2786 10.3516ZM19.138 10.3516C18.3289 10.3516 17.6731 9.69582 17.6731 8.88672C17.6731 8.07762 18.3289 7.42188 19.138 7.42188C19.9471 7.42188 20.6028 8.07762 20.6028 8.88672C20.6028 9.69582 19.9471 10.3516 19.138 10.3516ZM42.6758 10.3516H33.7891C32.9796 10.3516 32.3242 9.6962 32.3242 8.88672C32.3242 8.07724 32.9796 7.42188 33.7891 7.42188H42.6758C43.4853 7.42188 44.1406 8.07724 44.1406 8.88672C44.1406 9.6962 43.4853 10.3516 42.6758 10.3516Z" fill="white" />
                </svg><span>Doğa Dostu</span>
                </div>
                <p>Doğa dostu malzemeler ile tasmalar evcil hayvanınız için özenle hazırlanmaktadır.</p>
              </div>
              <div className='features-box mt-5'>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_10_15553)">
                      <path d="M48.5352 0H42.5781C41.7685 0 41.1133 0.655176 41.1133 1.46484V2.92969H29.1247C28.518 1.22832 26.9072 0 25 0C23.0928 0 21.482 1.22832 20.8753 2.92969H8.88672V1.46484C8.88672 0.655176 8.23154 0 7.42188 0H1.46484C0.655176 0 0 0.655176 0 1.46484V7.32422C0 8.13389 0.655176 8.78906 1.46484 8.78906H7.42188C8.23154 8.78906 8.88672 8.13389 8.88672 7.32422V5.83984H14.9027C9.81904 9.01572 6.46699 14.5937 6.06631 20.8413C4.30869 21.4166 3.02734 23.0527 3.02734 25C3.02734 27.4232 4.99863 29.3945 7.42188 29.3945C9.84512 29.3945 11.8164 27.4232 11.8164 25C11.8164 23.1309 10.6386 21.5417 8.99023 20.9075C9.49004 13.9422 14.3502 8.07148 21.1106 6.39648C21.8418 7.81025 23.3015 8.78906 25 8.78906C26.6985 8.78906 28.1582 7.81025 28.8894 6.39648C35.6498 8.07139 40.51 13.9421 41.0098 20.9074C39.3614 21.5417 38.1836 23.1309 38.1836 25C38.1836 27.4232 40.1549 29.3945 42.5781 29.3945C45.0014 29.3945 46.9727 27.4232 46.9727 25C46.9727 23.0527 45.6913 21.4166 43.9337 20.8413C43.533 14.5937 40.181 9.03525 35.0973 5.85938H41.1133V7.32422C41.1133 8.13389 41.7685 8.78906 42.5781 8.78906H48.5352C49.3448 8.78906 50 8.13389 50 7.32422V1.46484C50 0.655176 49.3448 0 48.5352 0Z" fill="white" />
                      <path d="M34.9659 48.1831C34.1997 45.8385 31.9923 44.043 29.3946 44.043H20.6056C18.0079 44.043 15.8005 45.8385 15.0343 48.1831C14.7389 49.0871 15.5079 50 16.4591 50H33.5411C34.4922 50 35.2613 49.0871 34.9659 48.1831Z" fill="white" />
                      <path d="M37.9375 30.0469L26.4649 12.8378V26.7347C28.1662 27.3414 29.3945 28.9522 29.3945 30.8594C29.3945 33.2827 27.4233 35.2539 25 35.2539C22.5768 35.2539 20.6055 33.2827 20.6055 30.8594C20.6055 28.9522 21.8338 27.3414 23.5352 26.7347V12.8378L12.0625 30.0469C11.6748 30.6277 11.7521 31.4016 12.2456 31.8952C14.9348 34.5843 16.6537 38.0487 17.3171 41.7648C18.3347 41.352 19.4414 41.1133 20.6055 41.1133H29.3945C30.5586 41.1133 31.6653 41.3519 32.6829 41.7646C33.3463 38.0483 35.0652 34.5843 37.7544 31.8952C38.248 31.4016 38.3252 30.6277 37.9375 30.0469Z" fill="white" />
                      <path d="M25 29.3945C24.1918 29.3945 23.5352 30.0512 23.5352 30.8594C23.5352 31.6676 24.1918 32.3242 25 32.3242C25.8082 32.3242 26.4648 31.6676 26.4648 30.8594C26.4648 30.0512 25.8082 29.3945 25 29.3945Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_15553">
                        <rect width="50" height="50" fill="white" />
                      </clipPath>
                    </defs>
                  </svg><span>Efektif Tasma Tasarımı</span>
                </div>
                <p>Tasmalarımız sağlığa uygun olduğu gibi aynı zamanda tasarım olarak da şık ve özenle tasarlanmaktadır.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='features-image'>
                <img src={FeaturesImage} alt='Bilgi Edin' />
              </div>
            </div>
            <div className='col-md-4 feat'>
              <div className='features-box'>
                <div className='d-flex justify-content-between align-items-center mb-2'><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_10_15548)">
                    <path d="M15.3748 22.2756C17.6645 27.3286 22.5665 29.5281 24.9997 29.5281C26.5995 29.5281 29.2667 28.5764 31.557 26.4887C30.7196 26.5472 29.8246 26.5768 28.8681 26.5768C28.6437 26.5768 28.4083 26.5747 28.1567 26.5708C27.6745 26.9421 27.0773 27.1514 26.4575 27.1514H24.4197C22.884 27.1514 21.6347 25.9021 21.6347 24.3664C21.6347 22.8307 22.884 21.5814 24.4197 21.5814H26.4575C27.1937 21.5814 27.8822 21.8683 28.3929 22.3632C28.5626 22.3651 28.7298 22.366 28.894 22.366C31.5246 22.366 33.2583 22.1247 34.3924 21.8337C34.2453 21.4757 34.1651 21.084 34.1651 20.6751V13.6138C34.1651 12.8792 34.4378 12.1751 34.9092 11.6312C34.6576 9.67281 34.201 8.17773 33.5195 7.07486C32.1153 4.80216 29.408 3.74371 24.9997 3.74371C21.3426 3.74371 18.8172 4.50287 17.2794 6.06451C16.0872 7.27511 15.3964 9.0025 15.0735 11.6113C15.5555 12.1573 15.8343 12.8686 15.8343 13.6138V20.6751C15.8344 21.2627 15.6655 21.811 15.3748 22.2756Z" fill="white" />
                    <path d="M10.3645 22.3422H12.809C13.7293 22.3422 14.476 21.5958 14.476 20.6751V13.6138C14.476 12.9987 14.1419 12.4627 13.6463 12.1739C14.1922 6.39182 16.4234 2.38506 24.9999 2.38506C29.9251 2.38506 32.9996 3.64851 34.6755 6.36084C35.6507 7.9392 36.1198 9.97783 36.3389 12.1826C35.8512 12.4735 35.5238 13.0047 35.5238 13.6137V20.675C35.5238 21.4688 36.0791 22.1316 36.8221 22.2997C35.7445 23.0045 33.5135 23.7244 28.8941 23.7244C28.5199 23.7244 28.1299 23.7196 27.7237 23.7099C27.4859 23.2527 27.0088 22.9398 26.4578 22.9398H24.4201C23.6324 22.9398 22.9936 23.5785 22.9936 24.3663C22.9936 25.1541 23.6324 25.7928 24.4201 25.7928H26.4578C26.9338 25.7928 27.3544 25.5587 27.6134 25.2005C28.0424 25.2113 28.4625 25.2181 28.8684 25.2181C34.0754 25.218 37.3855 24.3292 38.7261 22.5658C38.7832 22.4908 38.8352 22.4161 38.8826 22.3422H39.6357C40.5561 22.3422 41.3026 21.5958 41.3026 20.6751V13.6138C41.3026 12.6933 40.5562 11.9469 39.6357 11.9469H38.7162C38.4575 9.28307 37.8841 7.01539 36.7046 5.1069C34.5815 1.67047 30.7526 0 24.9998 0C19.2466 0 15.4181 1.67047 13.2949 5.10704C12.1155 7.01552 11.5423 9.28293 11.2835 11.947H10.3643C9.44365 11.947 8.69727 12.6933 8.69727 13.614V20.6753C8.69727 21.5958 9.44379 22.3422 10.3645 22.3422Z" fill="white" />
                    <path d="M45.1536 43.1065C44.5993 39.6603 43.4582 35.2211 41.1698 33.6438C39.6093 32.5677 34.1616 29.657 31.8353 28.4142L31.7864 28.3881C31.5202 28.2459 31.1953 28.2744 30.958 28.4607C29.7376 29.4186 28.4016 30.0639 26.9872 30.3787C26.7373 30.4342 26.532 30.6121 26.4411 30.8515L24.9998 34.6501L23.5585 30.8515C23.4677 30.6119 23.2624 30.4342 23.0124 30.3787C21.598 30.0639 20.2618 29.4186 19.0412 28.4607C18.804 28.2743 18.4791 28.2458 18.2129 28.3881C15.9127 29.6171 10.3944 32.5889 8.8364 33.6392C6.20096 35.4147 5.05 41.8372 4.84609 43.1066C4.82584 43.2325 4.83753 43.3613 4.88005 43.4814C4.97433 43.7477 7.39173 50.0001 24.9997 50.0001C42.6074 50.0001 45.025 43.7477 45.1194 43.4816C45.1621 43.3612 45.1738 43.2323 45.1536 43.1065ZM36.955 39.149H29.9811V37.6803H36.955V39.149Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_15548">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg><span>24/7 Petıd ekibi ile destek</span>
                </div>
                <p>Tüm süreçlerde sizin yanınızdayız. 7/24 bize ulaşabilir ve ürünümüz hakkında bilgi alabilirsiniz.</p>
              </div>
              <div className='features-box mt-5'>
                <div className='d-flex justify-content-between align-items-center mb-2'><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35.5184 0H14.4814C12.468 0 10.8428 1.63253 10.8428 3.64223V46.3614C10.8428 48.3693 12.468 50 14.4814 50H35.5184C37.5281 50 39.157 48.3693 39.157 46.3614V3.64223C39.157 1.63253 37.5281 0 35.5184 0ZM19.809 2.21194H30.1945C30.4569 2.21194 30.67 2.60367 30.67 3.08833C30.67 3.57299 30.4569 3.96655 30.1945 3.96655H19.809C19.5448 3.96655 19.3352 3.57299 19.3352 3.08833C19.3352 2.60367 19.5448 2.21194 19.809 2.21194ZM25.0017 46.4051C23.7208 46.4051 22.6786 45.3629 22.6786 44.0802C22.6786 42.7975 23.7208 41.759 25.0017 41.759C26.279 41.759 27.3212 42.7975 27.3212 44.0802C27.3212 45.3629 26.279 46.4051 25.0017 46.4051ZM36.4313 38.4447H13.5703V6.14569H36.4313V38.4447Z" fill="white" />
                </svg><span>Android ve IOS Destekli</span>
                </div>
                <p>PetID uygulaması hem IOS, hem androin sistemlerde en iyi şekilde çalışır.</p>
              </div>
              <div className='features-box mt-5'>
                <div className='d-flex justify-content-between align-items-center mb-2'><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_10_15563)">
                    <path d="M55.7736 28.861C49.4782 40.0097 39.0949 46.6667 27.9999 46.6667C16.9049 46.6667 6.52157 40.0097 0.226238 28.861C-0.0747617 28.3267 -0.0747617 27.6757 0.226238 27.1414C6.52157 15.9904 16.9049 9.33336 27.9999 9.33336C39.0949 9.33336 49.4782 15.9904 55.7736 27.139C56.0746 27.6734 56.0746 28.3267 55.7736 28.861ZM27.9999 18.6667C22.8526 18.6667 18.6666 22.8527 18.6666 28C18.6666 33.1474 22.8526 37.3334 27.9999 37.3334C33.1472 37.3334 37.3332 33.1474 37.3332 28C37.3332 22.8527 33.1472 18.6667 27.9999 18.6667Z" fill="white" />
                    <path d="M53.6666 37.3333C52.3786 37.3333 51.3333 38.3787 51.3333 39.6667V49C51.3333 50.2857 50.2856 51.3333 48.9999 51.3333H39.6666C38.3786 51.3333 37.3333 52.3787 37.3333 53.6667C37.3333 54.9547 38.3786 56 39.6666 56H48.9999C52.8593 56 55.9999 52.8593 55.9999 49V39.6667C55.9999 38.3787 54.9546 37.3333 53.6666 37.3333Z" fill="white" />
                    <path d="M2.33333 37.3333C1.04533 37.3333 0 38.3787 0 39.6667V49C0 52.8593 3.14067 56 7 56H16.3333C17.6213 56 18.6667 54.9547 18.6667 53.6667C18.6667 52.3787 17.6213 51.3333 16.3333 51.3333H7C5.71433 51.3333 4.66667 50.2857 4.66667 49V39.6667C4.66667 38.3787 3.62133 37.3333 2.33333 37.3333Z" fill="white" />
                    <path d="M48.9999 1.52588e-05H39.6666C38.3786 1.52588e-05 37.3333 1.04535 37.3333 2.33335C37.3333 3.62135 38.3786 4.66668 39.6666 4.66668H48.9999C50.2856 4.66668 51.3333 5.71435 51.3333 7.00002V16.3334C51.3333 17.6214 52.3786 18.6667 53.6666 18.6667C54.9546 18.6667 55.9999 17.6214 55.9999 16.3334V7.00002C55.9999 3.14068 52.8593 1.52588e-05 48.9999 1.52588e-05Z" fill="white" />
                    <path d="M16.3333 1.52588e-05H7C3.14067 1.52588e-05 0 3.14068 0 7.00002V16.3334C0 17.6214 1.04533 18.6667 2.33333 18.6667C3.62133 18.6667 4.66667 17.6214 4.66667 16.3334V7.00002C4.66667 5.71435 5.71433 4.66668 7 4.66668H16.3333C17.6213 4.66668 18.6667 3.62135 18.6667 2.33335C18.6667 1.04535 17.6213 1.52588e-05 16.3333 1.52588e-05Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_15563">
                      <rect width="56" height="56" fill="white" transform="matrix(1 0 0 -1 0 56)" />
                    </clipPath>
                  </defs>
                </svg><span>NFC Destekli ve GPS Modüllü</span>
                </div>
                <p>Tasmalarımız NFC çip sayesinde hem evcil hayvanınızın bilgilerini saklıyor hem de GPS ile konumunu öğrenebilirsiniz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Homepage
