import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import Image from '../components/Image';
import { Loader } from 'lucide-react'

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [driverImg, setDriverImg] = useState(null);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    licenseNumber:"",
  });

  const imageHandler = (file) => {
    setDriverImg(file);
  }

  const inputHandler = (e) => {
    // console.log(e.target.value)
    const eleName = e.target.name;
    const value = e.target.value;
    // if(eleName === "driverImg"){
      // setFormData({...form, [eleName]: e.target.files[0]});
    // }else{
      setFormData({... formData, [eleName]: value});
    // }
  }

  

  const submitHandler = async (e) => {
    // console.log("button clicked")
    e.preventDefault()
    if(!driverImg){
      alert("Please select a image");
      return;
    }

    let driverImgURL = null;

    // cloudinary image upload logic

    try {
      setLoading(true)
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const preset = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;
      const formData = new FormData();
      formData.append("file", driverImg);
      formData.append("upload_preset", preset);
      formData.append("folder", `Booking-portal/driver/Image`);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData
      });

      if(!res.ok){
        const error = await res.json();
        console.log(error);
        return;
      }

      const data = await res.json();
      console.log(data.secure_url);

      driverImgURL = data.secure_url;
            
    } catch (error) {
      console.log(error);
      return null;
    }

    // manage a driver register

    try {
      const registerBody = {
        ...formData,
        driverImgURL
      }
      // const form = new FormData ();
      // form.append("name", formData.name)
      // form.append("email", formData.email)
      // form.append("password", formData.password)
      // form.append("phone", formData.phone)
      // form.append("licenseNumber", formData.licenseNumber)
      // form.append("driverImg",  driverImg)
      // if (formData.driverImg) {
      //   form.append("driverImg", formData.driverImg)
      // } else {
      //   alert("please upload image");
      //   return;
      // }
      // form.append("driverImg", formData.driverImg);
      
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/driverAuth/register`, {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(registerBody),
        // body: form,
      });
      
      const data = await res.json();

      console.log(data)
      // console.log("id", data.data._id);
      // var driverId = data.data._id;

      if(!data.success){
        alert("Registration failed");
        return;
      } 

      const body = {
        email: formData.email,
        password: formData.password,
        licenseNumber: formData.licenseNumber,
      }

      // manage a driver login

      const res1 = await fetch(`${url}/driverAuth/login`, {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(body),
      });

      const data1 = await res1.json();

      // console.log(data1);

      // console.log(data1.data.accesstoken);
      // console.log(data1.data.reftoken);

      const token = data1.data.accesstoken;
      const reftoken = data1.data.reftoken;

      // const driverId = data1.data._id;

      if(data1.success){
        localStorage.setItem("token", token);
        localStorage.setItem("reftoken", reftoken);
      }

      if(data1.success){
        navigate("/vehicleregistration");
      }
      
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <form onSubmit={submitHandler} className='bg-white p-4 shadow-2xl rounded-2xl'>
        <h1 className='text-center font-bold text-2xl p-2'>SignUp</h1>
        <div>
          <h2 className='mt-2'> Name </h2>
          <input onChange={inputHandler} type="text" placeholder='Enter your name' name="name" value={formData.name} className='border rounded   placeholder:text-center w-full' />
        </div>
        <div>
          <h2 className='mt-2'> Email </h2>
          <input onChange={inputHandler} type="email" placeholder='Enter the email' name='email' value={formData.email} className='border rounded  placeholder:text-center w-full'/>
        </div>
        <div>
          <h2 className='mt-2'> Password </h2>
          <input onChange={inputHandler} type="password" placeholder='Enter the password' name='password' value={formData.password} className='border rounded  placeholder:text-center w-full'/>
        </div>
        <div>
          <h2 className='mt-2'> Phone </h2>
          <input onChange={inputHandler} type="number" placeholder='Enter phone number' name='phone' value={formData.phone} className='border rounded  placeholder:text-center w-full'/>
        </div>
        <div>
          <h2 className='mt-2'> Licence Number </h2>
          <input onChange={inputHandler} type="text" placeholder='Enter the licence number' name='licenseNumber' value={formData.licenseNumber} className='border rounded  placeholder:text-center w-full'/>
        </div>
        <div>
          <h2 className='mt-2'> Upload Image </h2>
          <Image selectedImg={imageHandler} />
          {/* <input onChange={inputHandler} type="file" placeholder='please upload image' name='driverImg' value={formData.driverImg} className='border rounded  placeholder:text-center w-full'/> */}
        </div>

        {/* <div>
          <h2 className='mt-2'> Upload Image </h2>
          <input onChange={inputHandler} type="file" placeholder='please upload image' name='driverImg' value={formData.driverImg} className='border rounded  placeholder:text-center w-full'/>
        </div> */}


        <div>
          <button type='submit' className='bg-blue-500 p-2 mt-2 rounded-sm cursor-pointer w-full hover:bg-blue-700'>{loading ? <div className='w-full h-full text-white flex justify-center
          '><Loader className='w-4 h-4 animate-spin'/> </div> : "create Account" }</button>
          <p className='p-2'>Already have an account? <Link className='text-blue-600 p-2' to={"/login"}>Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Signup;