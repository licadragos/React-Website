import React from 'react'
import './DestinationsStyles.css'

import Picture2 from '../../assets/picture2.jpg'
import Picture3 from '../../assets/picture3.jpg'
import Picture4 from '../../assets/picture4.jpg'
import Picture5 from '../../assets/picture5.jpg'
import Picture6 from '../../assets/picture6.jpg'

function Destinations() {
    return (
        <div className='destinations'>
            <div className='container'>
                <h1>Most Rare Places</h1>
                <p>Get information about areas that you have never knew existed</p>
                <div className='img-container'>
                    <img className='span-3 image-grid-row-2' src={Picture4} alt="/" />
                    <img src={Picture3} alt="/" />
                    <img src={Picture6} alt="/" />
                    <img src={Picture5} alt="/" />
                    <img src={Picture2} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Destinations