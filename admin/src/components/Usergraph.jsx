import React, { useEffect, useState } from 'react'
import style from "../styles/usergraph.module.css"
import { useContext } from 'react';
import {UserProvider} from '../context/UserContext';
import { Link } from 'react-router-dom';
import withAuth from './withAuth';

const Usergraph = () => {
    const {user} = useContext(UserProvider);

    const users = user?.filter((i) => i.role === "user") || [];

    return (
        <div className={style.body}>
            <h2>Users </h2>
            <Link className={style.link} to="/users">See all</Link>
            <div className={style.headings}>
                <h3>Names</h3>
                <h3>Role</h3>
            </div>

            {user ? <ul>
                {users.map((i, index) => (
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

export default withAuth(Usergraph);
