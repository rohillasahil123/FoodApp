import React from 'react'
import restorentimage from '../../assets/restorent.jpg'


const Home = () => {
  return (
    <>
    <div>
      <div className='flex justify-between'>
        <div className='mt-[80px]'>
          <h1 className='text-4xl  mt-5 font-bold ml-[100px]'> <span className='text-orange-600'> India's </span> <span className='text-blue'> First  </span> <span className='text-green-800'> Restorent </span> </h1> 
          <p className='ml-[40px] mt-3 '>From swanky upscale restaurants to the cosiest hidden gems <br/> serving the most incredible food, Zomato covers it all. Explore menus, and t<br /> millions of restauran photos  and reviews from users just like you, <br /> to find your next great meal.</p>
          <div className='ml-[40px] mt-5'>
            <input type="text" placeholder='search items ' 
          className='bg-slate-300 border p-2 w-[400px]  rounded  ' />   
         <button className='bg-rose-600  p-2 ml-3 rounded-md hover:bg-rose-950  hover:text-white'>Submit</button>
          </div>
        </div>
        <div>
          <img src={restorentimage} alt="" srcset=""
          className='rounded-2xl mr-9 mt-8' />
        </div>
   
      </div>
    </div>
   
    </>
  )
}

export default Home
