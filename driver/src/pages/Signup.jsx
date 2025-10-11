import React from 'react'
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='bg-white p-4  shadow-2xl rounded-2xl'>
        <h1 className='text-center font-bold text-2xl p-2'>SignUp</h1>
        <div>
          <h2 className='mt-2'> Name </h2>
          <input type="text" placeholder='Enter your name' className='border rounded   placeholder:text-center w-full' />
        </div>
        <div>
          <h2 className='mt-2'> Email </h2>
          <input type="email" placeholder='Enter the email' className='border rounded  placeholder:text-center w-full'/>
        </div>
        <div>
          <h2 className='mt-2'> Password </h2>
          <input type="password" placeholder='Enter the password' className='border rounded  placeholder:text-center w-full'/>
        </div>
        <div>
          <h2 className='mt-2'> Licence Number </h2>
          <input type="text" placeholder='Enter the licence number' className='border rounded  placeholder:text-center w-full'/>
        </div>
        <div>
          <button className='bg-blue-500 p-2 mt-2 rounded-sm cursor-pointer w-full hover:bg-blue-700'><Link to={'/vehicleregistration'}>Create Account</Link></button>
          <p className='p-2'>Already have an account? <Link className='text-blue-600 p-2' to={"/login"}>Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Signup;