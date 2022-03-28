import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Picture13 from '../../assets/picture13.jpg'
import Picture14 from '../../assets/picture14.webp'
import Picture15 from '../../assets/picture15.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={Picture13} alt='/' />
                    {/* <p className="legend">Maldives 1</p>  */}
                </div>
                <div>
                    <img src={Picture14} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Picture15} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel