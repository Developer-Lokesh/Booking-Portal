import React from 'react'
import style from "../styles/Sidebar.module.css"
import {Link} from "react-router-dom"
import { UserPen, UserRoundCheck, UserRoundX} from "lucide-react"

const Sidebar = () => {
  return (
    <div className={style.sidebarBody}>
      <h1 className={style.heading}>hi, admin</h1>
      <Link className={style.link} to="/pendingapprove"><UserPen/>Pending Drivers</Link>
      <Link className={style.link} to="/approved"> <UserRoundCheck/>Approved Drivers</Link>
      <Link className={style.link} to="/rejected"><UserRoundX/>Rejected Drivers</Link>

    </div>
  )
}

export default Sidebar;