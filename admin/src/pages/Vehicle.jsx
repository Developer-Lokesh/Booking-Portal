import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';

const Vehicle = () => {
  const [vehicle, setVehicle] = useState([]);
    useEffect(()=> {
      const fetchData = async () => {
        try {
          const url = import.meta.env.VITE_SERVER_URL;
          const token = localStorage.getItem("token");
        const data = await fetch(`${url}/admin/verification/rejected-drivers`,{
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          }
        });
        const res = await data.json();
        if(!res){
          alert("Something went wrong");
        }
        // console.log(res);
        setVehicle(res);
      
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[]);
  return (
    <Layout>Vehicle</Layout>
  )
}

export default Vehicle;