import React from 'react'
import './HeroStyles.css'
import Picture1 from '../../assets/picture1.jpg'
import {AiOutlineSearch} from 'react-icons/ai'

function Hero() {
    return (
        <div className='hero'>
            <img src={Picture1} alt="/" />
            <div className='overlay'></div>
            <div className='content'>
                <h1>Experience More</h1>
                <h2>See The Beauty of Life</h2>
                <form className='form'>
                    <div>
                        <input type='text' placeholder='Search for items...' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero