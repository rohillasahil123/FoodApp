import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='border flex justify-between h-[60px] bg-gray-200   '>
          <div>  <button className='text-2xl font-bold text-rose-500 ml-7 mt-3'> <Link to='/'> Order <span className='text-black'> Now </span> </Link> </button>    </div> 
            <div className='flex space-x-2 mr-5 mt-2 '>
            <button className='bg-slate-600 rounded text-white h-9 mt-1 w-[60px] hover:bg-slate-950  ' ><Link to='/'>Home</Link></button>
                <button className='bg-yellow-600 rounded text-white h-9 mt-1 w-[60px] hover:bg-yellow-950  ' ><Link to='/about'>About</Link></button>
                <button className='bg-[red] rounded text-white h-9 mt-1 w-[60px] hover:bg-red-950  ' ><Link to='/contact'>Contact</Link></button>
                <button className='bg-green-600 rounded text-white h-9 mt-1 w-[60px] hover:bg-green-950  ' ><Link to='/product'>Product</Link></button>
                <button className='bg-blue-600 rounded text-white h-9 mt-1 w-[60px] hover:bg-blue-950'> <Link to='/login'>Login</Link>  </button>
             
            </div>
        </div> 
    </>
  )
}

export default Navbar
