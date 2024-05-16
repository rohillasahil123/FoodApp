import React from 'react'
import data from '../../components/data.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Product = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
  

    <div className='w-[90%] mx-auto mt-[100px] '>
   
      <div className='text-center text-[30px] '>  
      <h1 className='text-3xl  font-bold uppercase'>Populer <span className='text-[red] '> Items </span></h1>
        </div>
        <div className=' md:grid-cols-5 '>
        <Slider {...settings}>
      {data.map((item)=>(
          <div className='rounded-md' key={item.id}>
          <div className=' flex justify-center rounded-t-xl mt-8'>
            <img
              src={item.image}
              className='w-[200px] rounded-full h-[200px]  object-cover  border' />
          </div>
          <div className='flex flex-col justify-center items-center gap-2  p-4'>
            <p className=' font-semibold '> {item.catagory}</p>
            <p className='text-xl font-semibold uppercase'> {item.price}</p>
            <p className='text-xl font-semibold uppercase'> {item.name}</p>
            <button className='bg-black w-[100px] text-white  rounded-md my-6 py-[15px] text-[15px] hover:text-[#fbc531] font-semibold' 
            >
              Add-cart
            </button>
          </div>
          
        </div>
        ))
      }
        </Slider>
        </div>
      </div>
    
  
  )
}

export default Product
