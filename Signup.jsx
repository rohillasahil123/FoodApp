import React, { useState } from 'react'
import signupImage from '../../assets/signup.jpg'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [formData , setFormData] = useState({
    username:"",
    gmail:"",
    password:""
  })

  const handelChange = (e)=>{
    const {name , value} = e.target;
    setFormData({...formData,[name]:value})
    // console.log(formData)

  }
  const handelSubmit = (e)=>{
    e.preventDefault();
    console.log(formData)

  }

  return (
  <>
    <div className=''>
      <div className='border w-[340px] rounded-md shadow-lg justify-center mx-auto mt-[150px] '>
      <form action="" onSubmit={handelSubmit}>
        <img src={signupImage} alt="" srcset=""
        className='' />
        <h1 className='text-2xl font-bold p-2 ml-[100px]'>Signup...</h1>
        <div className='px-4 space-y-3'>
    <div>
      <input type="text"
      placeholder='enter username'
      className='border rounded-sm px-2 py-1 w-[90%] '
      value={formData.username}
      name='username'
      onChange={handelChange}
       />
    </div>
    <div>
      <input type="text"
      placeholder='enter gmail'
      className='border rounded-sm px-2 py-1 w-[90%] '
      value={formData.gmail}
      name='gmail'
      onChange={handelChange}
       />
    </div>
    <div>
      <input type="text"
      placeholder='enter password'
      className='border rounded-sm px-2 py-1 w-[90%] ' 
      value={formData.password}
      name='password'
      onChange={handelChange}
       />
    </div>
    <div className='flex justify-between h-[100px]'>
    <button type='submit'
     className='border h-[35px] px-4 text-white bg-rose-600 rounded-md hover:bg-rose-900'
     >SignUp</button>
    <p>already sign & <Link to='/login'><span className='hover:cursor-pointer hover:text-[blue]'>login</span> </Link> </p>
    </div>
    </div>
    </form>
    </div>
    </div>
    
  </>
  )
}

export default Signup
