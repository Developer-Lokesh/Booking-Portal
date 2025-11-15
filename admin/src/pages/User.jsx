import React, { useContext } from 'react'
import Layout from '../components/Layout'
import style from "../styles/user.module.css"
import styles from "../styles/loading.module.css"
import { UserProvider } from '../context/UserContext'
import { Loader } from 'lucide-react';
import withAuth from '../components/withAuth'

const User = () => {
    const {user, loading} = useContext(UserProvider);

    const users = user?.filter((i) => i.role === "user")||[];

  return (
    <Layout className={style.sidebarBody}>
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.loader}><Loader size={50}/></div><br />
        </div>
      ) : (user && user?.length > 0 ? (
        <div className={style.body}>
          <h1 className={style.heading}>Users</h1>
          <table className={style.table}>
            <thead className={style.thead}>
              <tr>
                <th className={style.th}>Name</th>
                <th className={style.th}>Email</th>
                <th className={style.th}>Phone</th>
                <th className={style.th}>Role</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((i, index) => (
                  <tr key={index}>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.phone}</td>
                    <td className={style.verification}>{i.role} </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>) :
        (<h1 className={style.heading1}>No Users found</h1>))
      }
    </Layout>
  )
}

export default withAuth(User);