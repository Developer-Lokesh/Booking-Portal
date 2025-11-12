import React, { useState } from 'react'

const Image = ({selectedImg}) => {
  const [image, setImage] =useState(null);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    if(file){
      setImage(file);
      selectedImg(file);
    }
    else{
      setImage(null)
      selectedImg(null)
    }
  }

  
  return (
    <input onChange={imageHandler} type='file' placeholder='Upload image' name='driverImg' accept='image/*' className='border rounded  placeholder:text-center w-full p-2'/>
  )
}

export default Image