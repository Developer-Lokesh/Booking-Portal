import React from 'react'
import {Car, LogOut, ShieldUser} from "lucide-react"
import style from "../styles/header.module.css"

const Header = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("reftoken");
    window.location.href = "/login"
  }
  return (
    <div className={style.header}> 
      <div className={style.headerElement}>
        <Car className={style.icon} />
        <h1 className={style.heading}>cabXpress</h1>
      </div>
      <div className={style.bottons}>
        <button onClick={logout} className={style.logoutbtn}>Logout<LogOut/></button>
      <div className={style.profile}>L</div>
      </div>
    </div>
  )
}

export default Header