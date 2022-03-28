import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>EXPLORE.</h3>
                    <div className="social"> 
                        <FaInstagram className='icon' />
                        <FaFacebook className='icon' />
                        <FaPinterest className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />                       
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Inquiries</li>
                            <li>Guidelines</li>
                            <li>News</li>
                            <li></li>
                            <li style={{color: '#b2bd21'}}>Developed by Lica Dragos</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Pricing</li>
                            <li>T&A</li>
                            <li>Refferals</li>
                            <li>Membership</li>
                            <li>T&C</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer