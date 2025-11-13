import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../components/Image';
import { FastForward, Loader } from 'lucide-react';

const Vehicle = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [vehicleImg, setVehicleImg] = useState(null);
  const [form, setForm] = useState({
    numberPlate:"",
    RC:"",
    vehicleName:"",
    color:"",
    model:"",
    capacity:""
  });

  const imageHandler = (file) => {
    setVehicleImg(file)
  }

  const inputHandler = (e) => {
    const eleName = e.target.name;
    const value = e.target.value;
    setForm({...form, [eleName]: value});
  }

  const submitHandler = async (e) => {
    // console.log("button clicked");
    e.preventDefault();
    let vehicleImgURL = null

    // cloudinary image upload logic

    try {
      setLoading(true)
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const preset = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;
      const formData = new FormData();
      formData.append("file", vehicleImg)
      formData.append("upload_preset", preset)
      formData.append("folder", `Booking-portal/vehicle/image`)

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData
      });

      if(!res.ok){
        const error = await res.json();
        console.log("cloudinary", error)
        return;
      }

      const data = await res.json()
      console.log(data.secure_url)

      vehicleImgURL = data.secure_url;

    } catch (error) {
      console.log(error);
      return null;
    }

    // vehicle registration logic

    try {

      const vehicleregistrationBody = {
        ...form,
        vehicleImgURL
      }

      const url = import.meta.env.VITE_SERVER_URL;
      const token = localStorage.getItem("token")
      const res = await fetch(`${url}/driver/vehicleVerification/registration`, {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(vehicleregistrationBody),
      });

      const data = await res.json();
      console.log(data,"this is data");
      console.log(data.data._id, "this is vehicle id")
      // let vehicleId = data.data._id;
      let vehicleId = data.data && data.data._id ? data.data._id : null;

      // if(!data){
      //   console.log("Something went wrong");
      //   return;
      // }

      if(!data.success){
        alert("Vehicle registration failed!");
      }else{
        localStorage.setItem("vehicleId", vehicleId)
        navigate("/permit")
      }

    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  }

  return (
    <div className='h-screen flex justify-center items-center '>
      <form onSubmit={submitHandler} className='bg-white p-4  shadow-2xl rounded-2xl'>
        <h1 className='text-center font-bold text-2xl p-2'>Vehicle Registration</h1>
        <div  className=''>
          <h2 className=''> Number Plate </h2>
          <input onChange={inputHandler} type="text" placeholder='Enter number plate' name='numberPlate' value={form.numberPlate} className='border rounded  w-full placeholder:text-center' />
        </div>
        <div className='mt-2'>
          <h2 className=''> Registration Certificate (RC) </h2>
          <input onChange={inputHandler} type="text" placeholder='Enter the registration number' name='RC' value={form.RC} className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className='mt-2'>
          <h2 className=''> Vehicle Brand </h2>
          <input onChange={inputHandler} type="text" placeholder='Enter vehicle brand' name='vehicleName' value={form.vehicleName} className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className='mt-2 '>
          <h2 className=''> Vehicle color </h2>
          <input onChange={inputHandler} type="text" placeholder='Enter vehicle color' name='color' value={form.color} className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className=' mt-2'>
          <h2 className=''>Vehicle Model </h2>
          <input onChange={inputHandler} type="number" placeholder='Enter model' name='model' value={form.model} className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className='mt-2 '>
          <h2 className=''> Capacity </h2>
          <input onChange={inputHandler} type="number" placeholder='Enter seats capacity' name='capacity' value={form.capacity} className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className='mt-2 '>
          <h2 className=''> Upload vehicle image </h2>
          <Image selectedImg={imageHandler}/>
          {/* <input onChange={inputHandler} type="number" placeholder='Enter seats capacity' name='capacity' value={form.capacity} className='border rounded w-full placeholder:text-center'/> */}
        </div>
        <div className='mt-2'>
          <button type='submit' className='bg-blue-500 p-2 mt-2 rounded-sm cursor-pointer w-full hover:bg-blue-700'>{loading ? <div className='w-full h-full flex justify-center'><Loader className='w-4 h-4 text-white animate-spin'/></div> : "Register Vehicle"}</button>
          {/* <p className='p-2'>Already have an account? <Link className='text-blue-600 p-2' to={"/login"}>Login</Link></p> */}
        </div>
      </form>
    </div>
  )
}

export default Vehicle;