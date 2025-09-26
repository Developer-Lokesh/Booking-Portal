import React from 'react'
import style from "../styles/Sidebar.module.css"
import {Link} from "react-router-dom"
import Layout from '../components/Layout'

const Rejected = () => {
  return (
    <Layout className={style.sidebarBody}>
      <div>Rejected</div>
    </Layout>
  )
}

export default Rejected