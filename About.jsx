import React from 'react'
import aboutImage from '../../assets/about.jpg'

const About = () => {
  return (
   <>
   <div>
    <div className='text-center mt-5 '>
    <h1 className='text-3xl font-bold'>Popular locations in <span className='text-[red]'>India</span></h1>
    <p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food,<br /> Zomato covers  it all. Explore menus, and millions of restaurant photos and reviews from users just like you, <br /> to find your next great meal.</p>
    </div>
    <hr className='w-[1100px] ml-[70px] mt-7' />

    <div className='flex justify-between mt-9'>
    
    <div className='ml-6 w-[100%]'>
      <img src={aboutImage} alt=""
      className='rounded-md w-[600px] ' />

    </div>
    <div className='ml-[200px]'>
      <h2 className='ml-[200px] text-2xl font-bold '>Our<span className='text-yellow-500'>Food</span> </h2>
      <p> Zomato’s mission is to create happier everyday lives. Started in 2008,  <br /> Zomato offers services like restaurants discovery and reviews, <br /> home delivery of food, online table reservation, and digital payments when dining out.   It also works with restaurant partners <br /> to provide tools that enable  them to engage and acquire more customers while empowering them  <br /> with a last-mile delivery service and a one-stop procurement solution <br />  Hyperpure, for ingredients and kitchen products.
Apart from this, Zomato has been focusing <br /> on providing transparent and flexible earning opportunities to its delivery fleet, and contributing towards a more sustainable society through its non-profit entity Feeding India.  </p>
 </div>
   </div>
   </div>
   </>
  )
}

export default About
