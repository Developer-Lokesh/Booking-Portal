import React from 'react'
import Sidebar from './Sidebar'
import style from "../styles/desktopSidebar.module.css"

const Desktopsidebar = () => {
  return (
    <div className={style.desktopSidebar}>
        <Sidebar />
    </div>
  )
}

export default Desktopsidebar