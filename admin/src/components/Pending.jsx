import React, { useContext, useEffect } from 'react'
import { DriverProvider } from '../context/DriverContext'
import style from "../styles/usergraph.module.css"


const Pending = () => {
    const {pending} = useContext(DriverProvider);

    

    return (
    <div className={style.body}>
                <h2>Pending Drivers </h2>
                <p>See all</p>
                <div className={style.headings}>
                    <h3>Names</h3>
                    <h3>Role</h3>
                </div>
    
                {pending ? <ul>
                    {pending.map((i, index) => (
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
    
               
            </div>
  )
}

export default Pending;