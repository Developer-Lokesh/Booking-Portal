import React from 'react'
import style from "../styles/rejected.module.css"
import styles from "../styles/loading.module.css"
import Layout from '../components/Layout'
import { useState } from 'react'
import { useEffect } from 'react'
import { Loader } from 'lucide-react'

const Rejected = () => {
  const [loading, setLoading] = useState(false);
  const [reject, setReject] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = import.meta.env.VITE_SERVER_URL;
        const token = localStorage.getItem("token");
        const data = await fetch(`${url}/admin/verification/rejected-drivers`, {
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
        setReject(res.data);

      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <Layout className={style.sidebarBody}>
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.loader}><Loader size={50}/></div><br />
          {/* <h2>Loading rejected driver...</h2> */}
        </div>
      ): reject.length > 0 ? (
        <div className={style.body}>
          <h1 className={style.heading}>Rejected drivers</h1>
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
                reject.map((i, index) => (
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
        <h1 className={style.heading1}>No rejected driver found</h1>
      }
    </Layout>
  )
}

export default Rejected;




{/* <Layout className={style.sidebarBody}>
      {reject.length > 0 ? (
        <div className={style.body}>
          <h1 className={style.heading}>Rejected drivers</h1>
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
                reject.map((i, index) => (
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
        <h1 className={style.heading1}>No rejected driver found</h1>
      }
    </Layout> */}