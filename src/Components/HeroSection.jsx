import React from 'react'
import './HeroSection.css'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import HeroBanner from '../Assets/hero-banner.jpg'
// import image from '../Assets/sliderImg 3.jpg'

const HeroSection = () => {
  return (
    <div className='hero'>

      <div className='mask'>
        <img src={HeroBanner} alt="HeroBanner" />
      </div>

      <div className='content'>
        <h1>BOOK YOUR DREAM HOLIDAY </h1>
      
{/* 
      <div className='buttons'>
      <Link to='projects' spy={true} smooth={true} offset={-80} duration={500} className='btn' >Projects  </Link>
         <Link to='contact' spy={true} smooth={true} offset={-80} duration={500} className='btn btn-light '>Contact</Link>
          
        
        </div> */}
     </div>
    </div>
  )
}

export default HeroSection