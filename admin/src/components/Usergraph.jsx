import React, { useEffect, useState } from 'react'
// import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import style from "../styles/usergraph.module.css"
import { useContext } from 'react';
import {UserProvider} from '../context/UserContext';

const Usergraph = () => {
    const {user} = useContext(UserProvider);
    console.log(user, "lkfjsfjweo")

    // const users = user.filter((i) => i.role === "user");

    // const users = user.data.filter((i)=>{
    //     return i.role === "user"
    // })

    // const [userStatus, setUserStatus] = useState([]);
    // console.log(user, "user");
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const url = import.meta.env.VITE_SERVER_URL;
    //             const token = localStorage.getItem("token");

    //             const user = await fetch(`${url}/admin/handleUser/getusers`, {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "Authorization": `Bearer ${token}`
    //                 }
    //             });

    //             const res = await user.json();
    //             // console.log(res, "res")

    //             if (!res) {
    //                 alert("Something went wrong while fetching users");
    //             }
    //             // console.log(res.data[0].name, "user");

    //             const users = res.data.filter((i) => {
    //                 return i.role==="user"
    //             });

    //             // console.log(users, "users")

    //             setUserStatus(users)

    //         } catch (error) {
    //             console.log(error);
    //             alert("Something went wrong");
    //         }
    //     }
    //     fetchData();
    // }, []);


    return (
        <div className={style.body}>
            <h2>Users </h2>
            <p>See all</p>
            <div className={style.headings}>
                <h3>Names</h3>
                <h3>Role</h3>
            </div>

            {user ? <ul>
                {user.map((i, index) => (
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

export default Usergraph;
