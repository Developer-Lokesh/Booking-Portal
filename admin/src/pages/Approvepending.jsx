import React, { useContext, useEffect, useState } from 'react'
// import style from "../styles/Sidebar.module.css"
import style from "../styles/approvepending.module.css"
import { Link } from "react-router-dom"
import Layout from '../components/Layout'
// import DriverContext from '../context/DriverContext'

const Approvepending = () => {
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const token = localStorage.getItem("token");
        const data = await fetch(`${url}/admin/verification/pending-drivers`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        const res = await data.json();
        if (!res) {
          alert("Something went wrong");
        }
        // console.log(res);
        setDrivers(res.data);
      } catch (error) {
        console.log(error);
      }

    }
    fetchData();
  }, []);
  return (
    <Layout className={style.sidebarBody}>
      {drivers.length > 0 ? (
        <div className={style.body}>
          <h1 className={style.heading}>Pending drivers</h1>
          <div className={style.container}>
            <table >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody >
                {
                  drivers.map((i, index) => (
                    <tr key={index} >
                      <td>{i.name}</td>
                      <td>{i.email}</td>
                      <td>{i.phone}</td>
                      <td><Link to="/approve" className={style.profile}>Profile</Link></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      ) :
        <h1 className={style.heading1}>No request found</h1>
      }
    </Layout>
  )
}

export default Approvepending;