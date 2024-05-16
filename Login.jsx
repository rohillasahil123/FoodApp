import React from 'react';
import  loginImage from '../../assets/login.jpg';
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div>
      <div className='mx-auto justify-center items-center border w-[24%] shadow-lg space-y-3 mt-[90px] rounded-lg '>
      <img src={loginImage}  />
        <div className='text-center'><h1 className='text-3xl font-bold'>Login...</h1></div>
   
        <div className='ml-5' >
        <input type="text" 
        placeholder='enter your email'
        className='border rounded w-[90%] h-[33px]'
        />
        </div>
        <div className='ml-5'>
        <input type="text" 
        placeholder='enter your password'
        className='border rounded w-[90%] h-[33px]'
        />
        </div>
        <div className='flex justify-around h-[80px]'><button className='rounded border bg-rose-500 h-9 w-[80px] text-white' >Login</button>
          <p>Don't account & <Link to='/signup'><span className='hover:cursor-pointer hover:text-[blue]'>signup</span> </Link> </p>

        </div>
      </div>
      
    </div>
    </>
  )
}

export default Login