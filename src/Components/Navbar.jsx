import React from 'react'
import './Navbar.css'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'



const Navbar = () => {
  const [click , setClick] = useState(false)

  const showMenu = () => {
    setClick(!click)
  }

  const [color, setColor] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 1){
      setColor(true)
    } else{
        setColor(false)
    }
  }

  window.addEventListener('scroll',changeColor)

  
  return (
 <div className={color ? 'header header-bg' : 'header'}>
    <Link to='/'>
      <h1>TravelNow</h1>
      
      </Link> 
    <ul className={click ? 'nav-links active' : 'nav-links'} >
      <li>
        <Link to='home' spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu}>Home</Link>
      </li>  
      <li>
        <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu}>About</Link>
      </li>
      <li>
        <Link to='book-flight' spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu}>Book a flight</Link>
      </li>
       
      
      
      </ul>       

      <div className='hamburger' onClick={showMenu}>
        {click ?  <FaTimes size={20} style={{color : '#fff'}} /> : 
                  <FaBars size={20} style={{color : '#fff'}} />
}
        
       
;
      </div>
    
 </div>
  )
}                        

export default Navbar