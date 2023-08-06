import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import About from './About'
import BookFlight from './BookFlight'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'



const Home = () => {
  return (
    <div id='home'>
        <Navbar />
        <HeroSection />
        <About />
        
        <Carousel />
        <BookFlight />
        <Footer />
      
        
       
        
        
    </div>
  )
}

export default Home
