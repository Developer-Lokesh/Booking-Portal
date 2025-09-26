import React from 'react'
import style from "../styles/Sidebar.module.css"
import {Link} from "react-router-dom"
import Layout from '../components/Layout'

const Approvepending = () => {
  return (
    <Layout className={style.sidebarBody}>
      <div>Approvedpending</div>
    </Layout>
  )
}

export default Approvepending;