import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Image from '../components/Image';
import { Loader } from 'lucide-react';

const Permit = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [permitImg, setPermitImg] = useState(null)
  const [form, setForm] = useState({
    // permitImgURL:"",
    registrationNumber:"",
    validityDate:"",
    RC:""
  });

  const imageHandler = (file) => {
    setPermitImg(file);
  }

  const inputHandler = (e) => {
    const eleName = e.target.name;
    const value = e.target.value;
  //   if(eleName === "permitImg"){
  //     setForm({...form, [eleName]:e.target.files[0]})
  //   }
  // else{
    setForm({...form, [eleName]: value});
  // }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    let permitImgURL = null;
    const vehicleInfo = localStorage.getItem("vehicleId")
    // console.log(vehicleInfo, "this is vehicle")

    // cloudinary image upload logic

    try {
      setLoading(true)
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const preset = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;

      const formData = new FormData();
      formData.append("file", permitImg)
      formData.append("upload_preset", preset)
      formData.append("folder", `Booking-portal/permit/image`)

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method:'POST',
        body:formData
      });

      if(!res.ok){
        const error = await res.json();
        console.log(error);
        return;
      }

      const data = await res.json();

      permitImgURL = data.secure_url;
    } catch (error) {
      console.log(error)
      return null;
    }
    try {
      const permitRegistrationImg = {
        ...form,
        permitImgURL,
        vehicleInfo
      }
      const url = import.meta.env.VITE_SERVER_URL;
      const token = localStorage.getItem("token");

      // const formData = new FormData();
      // formData.append("permitImg", form.permitImg);
      // formData.append("registrationNumber", form.registrationNumber);
      // formData.append("validityDate", form.validityDate);
      // formData.append("RC", form.RC)

      const res = await fetch(`${url}/driver/permitcheck/permit`, {
        method:"POST",
        headers:{
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(permitRegistrationImg),
      });

      const data = await res.json();
      console.log(data);

      if(data.success){
        navigate("/");
      }
      else{
        console.log("Something went wrong");
      }

    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  }
  
  return (
    <div className='h-screen flex justify-center items-center '>
      <form onSubmit={submitHandler} className='bg-white p-4  shadow-2xl rounded-2xl'>
        <h1 className='text-center font-bold text-2xl'>Permit</h1>
        <div  className=''>
          <h2 className=''> Upload permit image </h2>
          <Image selectedImg={imageHandler}/>
          {/* <input onChange={inputHandler} type="file" placeholder='Upload image' name='permitImg'  className='border rounded  w-full placeholder:text-center' /> */}
        </div>
        <div className='mt-2'>
          <h2 className=''>Permit Registration Number </h2>
          <input onChange={inputHandler} type="text" placeholder='Enter the registration number' name='registrationNumber' value={form.registrationNumber} className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className='mt-2'>
          <h2 className=''> validity Date </h2>
          <input onChange={inputHandler} type="date" placeholder='Enter vehicle brand' name='validityDate' value={form.validityDate} className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className='mt-2 '>
          <h2 className=''> Registration Certification (RC) </h2>
          <input onChange={inputHandler} type="text" placeholder='Enter RC' name='RC' value={form.RC} className='border rounded w-full placeholder:text-center'/>
        </div>
        <div className='mt-2'>
          <button type='submit' className='bg-blue-500 p-2 mt-2 rounded-sm cursor-pointer w-full hover:bg-blue-700'>{loading ? <div className='w-full h-full flex justify-center'><Loader className='w-4 h-4 text-white animate-spin'/></div> : "Add Permit"}</button>
        </div>
      </form>
    </div>
  )
}

export default Permit;