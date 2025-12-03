import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eleName = e.target.name;
    const value = e.target.value;

    setInput({...input, [eleName] : value})
  }

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/auth/login`, {
        method:"POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(input)
      })
      
      const data = await res.json();
      console.log(data)
      if(data.success){
        navigate("/")
      } else{
        alert("Login failed!")
      }
    } catch (error) {
      console.log(error);
    }
  }
  
     return (
        <form onSubmit={submitHandler} className='flex w-screen h-screen items-center justify-center'>
            <div className='flex flex-col  p-4 rounded shadow-2xl shadow-gray-700 '>
                <h1 className='text-center text-2xl font-bold'>SignUp</h1>
                <div className='flex flex-col gap-2'>
                    
                    <span className='flex flex-col gap-1'>
                        <label htmlFor="">Email</label>
                        <input type='email' placeholder='Enter your email' name="email" value={input.email} onChange={inputHandler} className='border rounded  py-2 px-4' />
                    </span>
                    <span className='flex flex-col gap-1'>
                        <label htmlFor="">Password</label>
                        <input type='password' placeholder='Enter the password' name="password" value={input.password} onChange={inputHandler} className='border rounded py-2 px-4' />
                    </span>
                   
                    <button type='submit' className='border rounded bg-blue-500 p-2'>Sign Up</button>
                </div>
            </div>
        </form>
    )
  
}

export default Login