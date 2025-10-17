import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo1' src={assets.logoimg}/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dignissimos nobis sequi illum placeat eligendi? Hic, consequatur tempore illum natus quidem, ea, laboriosam vero repellat ut odio ipsam. Porro, odio?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-left">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91313113931</li>
                    <li>Tomafagasg@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2025 ©2004-2025  ALL Rights Reserved</p>
    </div>
  )
}

export default Footer