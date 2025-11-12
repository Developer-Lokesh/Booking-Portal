import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    licenseNumber: "",
    email: "",
    password: ""
  });

  const inputHandler = (e) => {
    // console.log(e.target.value)
    const eleName = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [eleName]: value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/driverAuth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      const data = await res.json();
      console.log(data);
      if(data.data){
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <form onSubmit={submitHandler} className='bg-white p-4  shadow-2xl rounded-2xl'>
        <h1 className='text-center font-bold text-2xl '>SignUp</h1>
        <div>
          <h2 className='mt-2'> Licence Number </h2>
          <input type="text" placeholder='Enter the license number' onChange={inputHandler} name='licenseNumber' value={login.licenseNumber} className='border rounded  placeholder:text-center w-full' />
        </div>
        <div>
          <h2 className='mt-2'> Email </h2>
          <input type="email" placeholder='Enter the email' onChange={inputHandler} name='email' value={login.email} className='border rounded  placeholder:text-center w-full' />
        </div>
        <div>
          <h2 className='mt-2'> Password </h2>
          <input type="password" placeholder='Enter the password' onChange={inputHandler} name='password' value={login.password} className='border rounded  placeholder:text-center w-full' />
        </div>
        <div>
          <button onSubmit={submitHandler} className='bg-blue-500 p-2 mt-2 rounded-sm cursor-pointer w-full hover:bg-blue-700'>Login</button>
          <p className='p-2'>Create new account <Link className='text-blue-600 p-2' to={"/signup"}>SignUp</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login;