import React from 'react'
import Logo from './img/Brainy_Smurf.png'

export default function Home() {
    return (
        <div className='home-page'>
            <h2 className='header'>Welcome Home!</h2>
            <img className='smurf-img'src={Logo} alt='brainy'/>
        </div>
    )
}
