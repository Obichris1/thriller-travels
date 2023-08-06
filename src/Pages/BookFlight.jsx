import React from 'react'
import './BookFlight.css'

import 'react-slideshow-image/dist/styles.css'


import { FaPlane } from 'react-icons/fa';



const BookFlight = () => {
  return (
    <div id='book-flight'>
   

        <div className='form-control'>

          <div className="category">
      <form>
         <select name = "dropdown">
            <option value = "Economy" selected>Economy</option>
            <option value = "Business Class">Business Class</option>
            <option value = "First Class">First Class</option>
         </select>
      </form>
      <form>
         <select name = "dropdown">
            <option value = "Round Trip" selected>Round trip</option>
            <option value = "One way">One way</option>
            <option value = "Multi-city">Multi-city</option>
         </select>
      </form>
      </div>
           
      <form action="" className='text-areas'>
          <input type="text" placeholder='From?' />
          <input type="text" placeholder='To where?'/>
          <input type="date" placeholder='Departure date' />
          <input type="date" placeholder='Arrival date ' />
          <button type='submit'> Fly <FaPlane size={20}  color='#333'  alignItems = 'center' />
           </button>

          </form>
        </div>
   



    </div>
  )
}

export default BookFlight