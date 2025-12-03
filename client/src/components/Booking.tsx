import React from 'react'

const Booking = () => {

  const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj)
  }

  return (
    <form onSubmit={submitHandler} className='w-full flex justify-center mt-2'>
      {/* <div>
        <img src="/taxi.png" alt="" className='h-[300px]' />
      </div> */}
      <div className='flex  gap-2 p-4 rounded line-shadow'>
        {/* <h1 className='text-center text-3xl font-semibold'>Search Ride</h1> */}
        <span className='gap-1.5 flex flex-col'>
          <label htmlFor="">Pickup Location</label>
          <input type="text" placeholder='Enter the pickup location' name='pickup' className='border rounded p-1.5'/>
        </span>
        <span className='gap-1.5 flex flex-col'>
          <label htmlFor="">Drop Location</label>
          <input type="text" placeholder='Enter the drop location' name='drop' className='border rounded p-1.5'/>
        </span>
        <button type='submit' className='border p-2 bg-orange-400 rounded'>Show Ride</button>
      </div>
      {/* <div>
        <img src="taxi2.png" alt="" className='h-[300px]' />
      </div> */}
    </form>
  )
}

export default Booking