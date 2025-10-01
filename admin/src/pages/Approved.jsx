import React from 'react'
import style from "../styles/Sidebar.module.css"
import { Link } from "react-router-dom"
import Layout from '../components/Layout'
import { useState } from 'react'
import { useEffect } from 'react'

const Approved = () => {
  const [approve, setApprove] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const token = localStorage.getItem("token");
        const data = await fetch(`${url}/admin/verification/approve-drivers`,{
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
        setApprove(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <Layout className={style.sidebarBody}>
      {approve.length>0 ?(<div>
        <h1>Approved drivers</h1>
      </div>):
      <h1 className={style.heading}>No driver found</h1>
      }
    </Layout>
  )
}

export default Approved;