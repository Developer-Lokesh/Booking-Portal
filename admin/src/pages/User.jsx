import React, { useContext } from 'react'
import Layout from '../components/Layout'
import style from "../styles/user.module.css";
import { UserProvider } from '../context/UserContext'

const User = () => {
    const {user} = useContext(UserProvider);

    const users = user?.filter((i) => i.role === "user")||[];

  return (
    <Layout className={style.sidebarBody}>
      {user?.length > 0 ? (
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
        <h1 className={style.heading1}>No Users found</h1>
      }
    </Layout>
  )
}

export default User