import React, { useContext, useEffect } from 'react'
import { DriverProvider } from '../context/DriverContext'
import style from "../styles/usergraph.module.css"


const Rejected = () => {
    const {rejected} = useContext(DriverProvider);

    // const pending = driverStatus && driverStatus.length > 0 ? driverStatus[0] : null

    // console.log(rejected)

    // console.log(driverStatus, "data");
    // console.log(driverStatus[0], "pending")
    // console.log(driverStatus[1], "approved")
    // console.log(driverStatus[2], "rejected")

    return (
    <div className={style.body}>
                <h2>Pending Drivers </h2>
                <p>See all</p>
                <div className={style.headings}>
                    <h3>Names</h3>
                    <h3>Role</h3>
                </div>
    
                {rejected ? <ul>
                    {rejected.map((i, index) => (
                        <div key={index}>
                            <div className={style.details}>
                                <li >{i.name}</li> 
                                <li>{i.role}</li>
                                </div>
                            <hr />
                        </div>
                    ))}
                </ul> :
                <h1>User not found</h1>
                }
    
                {/* <ul>
                    {userStatus.map((i, index) => (
                        <div key={index}>
                            <div className={style.details}>
                                <li >{i.name}</li> 
                                <li>{i.role}</li>
                                </div>
                            <hr />
                        </div>
                    ))}
                </ul> */}
            </div>
  )
}

export default Rejected;