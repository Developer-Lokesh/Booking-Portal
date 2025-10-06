import React from 'react'
import style from "../styles/approved.module.css"
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
        const data = await fetch(`${url}/admin/verification/approve-drivers`, {
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
        setApprove(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <Layout className={style.sidebarBody}>
      {approve.length > 0 ? (
        <div className={style.body}>
          <h1 className={style.heading}>Approved drivers</h1>
          <table className={style.table}>
            <thead className={style.thead}>
              <tr>
                <th className={style.th}>Name</th>
                <th className={style.th}>Email</th>
                <th className={style.th}>Phone</th>
                <th className={style.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                approve.map((i, index) => (
                  <tr key={index}>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.phone}</td>
                    <td className={style.verification}>{i.verificationStatus} </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>) :
        <h1 className={style.heading1}>No driver found</h1>
      }
    </Layout>
  )
}

export default Approved;