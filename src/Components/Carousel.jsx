
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Assets/sliderImg 1.jpg'
import img2 from '../Assets/sliderImg 2.jpg'
import img3 from '../Assets/sliderImg 3.jpg'
import './Carousel.css'


const imageItems = [
    {
        Location : 'Lagos to Abuja',
        date : 'Jun 4,2023',
        price : '#1000000'
    },

    {
      Location : 'Lagos to NewYork',
      date : 'Jun 25,2023',
      price : '#1000000'
  },

  {
    Location : 'Abuja to London',
    date : 'Jul 5,2023',
    price : '#1000000',
   Image : <img src={img2} alt="" />
    

},

{
  Location : 'Lagos to London',
  date : 'Jul 24,2023',
  price : '#1000000',
  Image : <img src={img1} alt="" />
},

{
  Location : 'Lagos to London',
  date : 'Jul 24,2023',
  price : '#1000000'
},

    

    


   
]


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
   



const Carousel = () => {

    var settings = {
        
    
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
      prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
              
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
          
        ]
      };


  return (
<div className='carousel-container'>

  <h1 style = {{color : 'black' ,marginBottom : '40px'}}>Today's deals</h1> 
    <Slider {...settings}>

      {imageItems.map((item,index) => (
        <a href='' key={index} className='card' style = {{backgroundImage : item.Image}}>
          <div className='transition'>
        <h3>{item.Location}</h3>
        <p>{item.date}</p>
        </div>

        <div className="price">
          <p>Pay Now</p>
          <h3>{item.price}</h3>
        </div>

        </a>
         

      ))}
        

        
      
    </Slider>
  </div>
  
  )
}

export default Carousel