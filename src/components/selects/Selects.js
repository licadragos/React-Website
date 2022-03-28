import React from 'react'
import './SelectsStyles.css'

import Picture7 from '../../assets/picture7.jpg'
import Picture8 from '../../assets/picture8.webp'
import Picture9 from '../../assets/picture9.jpg'
import Picture10 from '../../assets/picture10.jpg'
import Picture11 from '../../assets/picture11.jpg'
import Picture12 from '../../assets/picture12.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Picture7} text='Arashiyama Bamboo Forest, Japan' />
                <SelectsImg bgImg={Picture8} text='Forest of Knives, Madagascar' />
                <SelectsImg bgImg={Picture9} text='Dubrovnik, Croatia' />
                <SelectsImg bgImg={Picture10} text='Easter Island, Chile' />
                <SelectsImg bgImg={Picture11} text='Cappadocia, Turkey' />
                <SelectsImg bgImg={Picture12} text='Sossusvlei, Namibia' />
            </div>

        </div>
    )
}

export default Selects