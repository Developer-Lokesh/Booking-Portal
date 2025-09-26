import React from 'react'
import style from "../styles/Sidebar.module.css"
import {Link} from "react-router-dom"
import Layout from '../components/Layout'

const Approved = () => {
  return (
    <Layout className={style.sidebarBody}>
      <div>Approved</div>
    </Layout>
  )
}

export default Approved;