import React from 'react'
import { Link } from 'react-router-dom'

const Vehicle = () => {
  return (
    <div className='h-screen flex justify-center items-center '>
      <form className='bg-white p-4  shadow-2xl rounded-2xl'>
        <h1 className='text-center font-bold text-2xl p-2'>Vehicle Registration</h1>
        <div  className=''>
          <h2 className=''> Number Plate </h2>
          <input type="text" placeholder='Enter number plate' className='border rounded  w-full placeholder:text-center' />
        </div>
        <div className='mt-2'>
          <h2 className=''> Registration Certificate (RC) </h2>
          <input type="text" placeholder='Enter the registration number' className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className='mt-2'>
          <h2 className=''> Vehicle Name </h2>
          <input type="text" placeholder='Enter vehicle name' className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className='mt-2 '>
          <h2 className=''> Vehicle color </h2>
          <input type="text" placeholder='Enter vehicle color' className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className=' mt-2'>
          <h2 className=''>Vehicle Model </h2>
          <input type="number" placeholder='Enter model' className='border rounded w-full placeholder:text-center'/>
        </div><div className=' '>
          <h2 className=''> Capacity </h2>
          <input type="number" placeholder='Enter seats capacity' className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className='mt-2'>
          <button className='bg-blue-500 p-2 mt-2 rounded-sm cursor-pointer w-full hover:bg-blue-700'><Link to={'/vehicleregistration'}>Register Vehicle</Link></button>
          {/* <p className='p-2'>Already have an account? <Link className='text-blue-600 p-2' to={"/login"}>Login</Link></p> */}
        </div>
      </form>
    </div>
  )
}

export default Vehicle