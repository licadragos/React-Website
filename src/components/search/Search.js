import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div className='search'>
            <div className='container'>
                <div className='left'>
                    <h2>LOOK THROUGH YOUR HORIZON</h2>
                    <p>This view of nearly 10,000 galaxies is called the Hubble Ultra Deep Field. The snapshot includes galaxies of various ages, sizes, shapes, and colors. The smallest, reddest galaxies, about 100, may be among the most distant known, existing when the universe was just 800 million years old. The nearest galaxies--the larger, brighter, well-defined spirals and ellipticals--thrived about 1 billion years ago, when the cosmos was 13 billion years old. (Image credit: NASA, ESA, and S. Beckwith (STScI) and the HUDF Team)</p>
                <div className='search-col-2'>
                    <div className='box'>
                        <div>
                            <img src={Gold} alt="/"style={{marginRight: '1rem'}} />
                        </div>
                        <div>
                            <h3>WORLD'S LEADING</h3>
                            <p>TOP RATED DOCUMENTARY TV COMPANY SINCE 1986</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div>
                            <h3>LASTEST OFFER</h3>
                            <p>TOP RATED DOCUMENTARY TV COMPANY SINCE 1986</p>
                            <button>View Packages</button>
                        </div> 
                    </div>    
                </div> 
                </div>
                <div className='right'>
                    <div className='promo'>
                        <h4 className='save'>12% DISCOUNT</h4>
                        <p className='timer'>19 HOURS LEFT</p>
                        <p className='offers'>SHOW ALL THE CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className='input-wrap'>
                            <label>Destinations</label>
                            <select>
                                <option value="1">Arashiyama Bamboo Forest, Japan</option>
                                <option value="1">Forest of Knives, Madagascar</option>
                                <option value="1">Dubrovnik, Croatia</option>
                                <option value="1">Easter Island, Chile</option>
                                <option value="1">Taha'a, French Polynesia</option>
                                <option value="1">Cappadocia, Turkey</option>
                                <option value="1">Bagan, Burma</option>
                            </select>
                        </div>
                        <div className='date'>
                            <div className='input-wrap'>
                                <label>Check-In</label>
                                <input type='date' />
                            </div>
                            <div className='input-wrap'>
                                <label>Check-Out</label>
                                <input type='date' />
                            </div>
                        </div>
                        <button>Rates & Availabilies</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search