import React from 'react'
import data from '../data.js'

const AllProduct = () => {
  return (
   <>
   <div className='w-[90%] mx-auto mt-[100px]'>
    <div>
        <h2 className='text-center text-[#fbc531] text-3xl font-bold py-5'>Our <span className='text-[red]'>Food</span></h2>
     </div>
    <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-2'>
        {
            data.map((meal)=>(
                <div className='flex justify-center flex-col item-center border ' >
                <div>
                  <img src={meal.image}
                className='w-[250px] h-[200px] rounded-lg object-cover'
                  />
                </div>
                <div className='flex justify-center py-2 px-4 flex-col items-center'>
                    <p className='text-xl font-semibold uppercase'>{meal.name}</p>
                    <p className='text-xl font-semibold uppercase'>{meal.price}</p>
                    <button className='border bg-rose-600 text-white p-2 rounded-md'>Add-item</button>
                </div>
                </div>
          
            ))}

         </div>
        </div>
   
   </>
  )
}

export default AllProduct
