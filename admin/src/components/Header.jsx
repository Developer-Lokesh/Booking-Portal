import React from 'react'
import {LogOut, ShieldUser} from "lucide-react"
import style from "../styles/header.module.css"

const Header = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("reftoken");
    localStorage.removeItem("reftoken");
    window.location.href = "/login"
  }
  return (
    <div className={style.header}> 
      <div className={style.headerElement}>
        <ShieldUser className={style.icon}/>
        <h1>Admin</h1>
      </div>
      <div>
        <button onClick={logout} className={style.logoutbtn}>Logout<LogOut/></button>
      </div>
    </div>
  )
}

export default Header