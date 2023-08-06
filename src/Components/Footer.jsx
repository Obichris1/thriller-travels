import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer-container">
      <div className="footer-content">
       <div className="services item">
        <h3>Services</h3>
        <a href="">Flights</a>
        <a href="">Hotels</a>
        <a href="">Visas</a>
        <a href="">Packages</a>
        <a href="">Deals</a>  
       </div>
      

       <div className="account item">
        <h3>Account</h3>
        <a href="">My Account</a>
        <a href="">Affiliates</a>
       
       </div>
       

       <div className="contact item">
        <h3>TravelNow</h3>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Feedback</a>
        
       </div>
       </div>

       <div className="footer-socials">
        <a href="">  <FaFacebook size={20} color='#fff'/></a>
       
        <a href="">  <FaTwitter size={20} color='#fff'/></a>
        <a href="">  <FaInstagram size={20} color='#fff'/></a>
       </div>

    
       </div>

      <div className='copyright'>copyright&copy;Chukwunenye Obinna</div> 
    </div>
  )
}

export default Footer