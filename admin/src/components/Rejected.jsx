import React, { useContext, useEffect } from 'react'
import { DriverProvider } from '../context/DriverContext'
import style from "../styles/usergraph.module.css"
import { Link } from 'react-router-dom';


const Rejected = () => {
    const { rejected } = useContext(DriverProvider);

    // console.log(rejected.verificationStatus);

    return (
        <div className={style.body}>
            <h2>Rejected Drivers </h2>
            <Link className={style.link} to="/rejected">See all</Link>
            <div className={style.headings}>
                <h3>Names</h3>
                <h3>Status</h3>
            </div>

            {rejected ? <ul>
                {rejected.map((i, index) => (
                    <div key={index}>
                        <div className={style.details}>
                            <li >{i.name}</li>
                            <li>{i.verificationStatus}</li>
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

export default Rejected;