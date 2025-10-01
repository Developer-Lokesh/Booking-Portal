import React from 'react'
import style from "../styles/Sidebar.module.css"
import {Link} from "react-router-dom"
import Layout from '../components/Layout'
import { useState } from 'react'
import { useEffect } from 'react'
import { Heading1 } from 'lucide-react'

const Rejected = () => {
  const [reject, setReject] = useState([]);
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
      console.log(res);
      setReject(res);
    
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);
  return (
    <Layout className={style.sidebarBody}>
      {reject.length > 0 ?(
        <div>
          Rejected
        </div>
      ):
      <h1>No rejected driver found</h1> 
      }
    </Layout>
  )
}

export default Rejected