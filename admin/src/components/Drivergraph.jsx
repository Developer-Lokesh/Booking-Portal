import React, { useEffect, useState } from 'react'
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts"
import style from "../styles/Drivergraph.module.css"

const Drivergraph = () => {
  const [driverCount, setDrivercount] = useState(0);
  const [driverStatus, setDriverStatus] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const token = localStorage.getItem("token");

        const driver = await fetch(`${url}/admin/handleUser/getdrivers`, {
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          }
        });

        const res1 = await driver.json();

        if(!res1){
          alert("Something went wrong while fetching driver");
        }

        setDrivercount(res1.data.length);
        
        const pending = res1.data.filter((i) => {
          return i.verificationStatus === "pending"
        });
        console.log(pending, "pending drivers");


        const approved = res1.data.filter((i) => {
          return i.verificationStatus === "approved"
        });
        console.log(approved, "approved drivers");

        const rejected = res1.data.filter((i) => {
          return i.verificationStatus === "rejected"
        });
        console.log(rejected, "rejected drivers");

        setDriverStatus([
          {name:"Pending", value: pending.length},
          {name:"Approved", value: approved.length},
          {name: "Rejected", value: rejected.length}
        ]);

      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    }
    fetchData();
  },[]);

  const colors = ["#FFA500", "#008000", "#FF0000"];

  return (
    <div className={style.body}>
      <h2>Driver verification status</h2>
      <ResponsiveContainer  width="100%" height={400}>
        <PieChart>
          <Pie data = {driverStatus} cx="50%" cy="50%" labelLine = {false} outerRadius={120} fill='#8884d8' dataKey="value" label>
            {driverStatus.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))}
          </Pie>
          <Tooltip/>
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Drivergraph;