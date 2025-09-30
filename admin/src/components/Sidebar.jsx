import React from 'react'
import style from "../styles/Sidebar.module.css"
import { Link } from "react-router-dom"
import { CarTaxiFront, Home, UserPen, UserRoundCheck, UserRoundX } from "lucide-react"

const Sidebar = () => {
  return (
    <div className={style.sidebarBody}>
      <h1 className={style.heading}>hi, admin</h1>
      <div className={style.links}>
        <Link className={style.link} to="/"><Home size={18} />Home</Link>
        <Link className={style.link} to="/pendingapprove"><UserPen size={18} />Pending Drivers</Link>
        <Link className={style.link} to="/approved"> <UserRoundCheck size={18} />Approved Drivers</Link>
        <Link className={style.link} to="/rejected"><UserRoundX size={18} />Rejected Drivers</Link>
        <Link className={style.link} to="/vehiclecheck"><CarTaxiFront size={18} />Approve Vehicle</Link>
      </div>
    </div>
  );
}

export default Sidebar;