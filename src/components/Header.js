import React from 'react'
import '../style/header.scss'

const Header = (props) => {
    return (
        <header>
            <div className='full-header px-5'>
                <div className='desktop-header-content d-flex justify-content-between align-items-center'>
                    <a className ={props.page === 'HomePage' ? `normal-link active-link` : `normal-link` } href='/'>Anasayfa</a>
                    <a className ="normal-link" href='#hakkimizda'>Hakkımızda</a>
                    <a className ="logo" href='/'>PETID</a>
                    <a className ="normal-link" href='#bilgi'>Bilgi Edinin</a>
                    <a className ="download-link" href='/download'>İndir</a>
                </div>
                <div className='mobile-header-content d-flex justify-content-around align-items-center'>
                    <a className ="normal-link" href='#bilgi'>Bilgi Alın</a>
                    <a className ="logo" href='/'>PETID</a>
                </div>
            </div>
        </header>
    )
}

export default Header
