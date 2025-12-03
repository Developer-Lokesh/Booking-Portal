import React, { useContext } from 'react'
import Sidebar from "./Sidebar"
import style from '../styles/mobilesidebar.module.css'
import { appContext } from '../store/Appstore'


const Mobilesidebar = () => {
  const {sidebar} = useContext(appContext)
  return (
    <div className={sidebar ? style.mobileSidebar : style.openSidebar}>
      <Sidebar/>
    </div>
  )
}

export default Mobilesidebar