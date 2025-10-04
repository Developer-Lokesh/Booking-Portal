import React, { useEffect, useState } from 'react'
// import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import style from "../styles/usergraph.module.css"

const Usergraph = () => {
    const [userStatus, setUserStatus] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = import.meta.env.VITE_SERVER_URL;
                const token = localStorage.getItem("token");

                const user = await fetch(`${url}/admin/handleUser/getusers`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                const res = await user.json();
                console.log(res, "res")

                if (!res) {
                    alert("Something went wrong while fetching users");
                }
                // console.log(res.data[0].name, "user");

                const users = res.data.filter((i) => {
                    return i.role==="user"
                });

                console.log(users, "users")

                setUserStatus(users)

            } catch (error) {
                console.log(error);
                alert("Something went wrong");
            }
        }
        fetchData();
    }, []);


    return (
        <div className={style.body}>
            <h2>Users </h2>
            <div className={style.headings}>
                <h3>Names</h3>
                <h3>Role</h3>
            </div>
            <ul>
                {userStatus.map((i, index) => (
                    <div key={index}>
                        <div className={style.details}>
                            <li >{i.name}</li> 
                            <li>{i.role}</li>
                            </div>
                        <hr />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Usergraph;

{/* <ResponsiveContainer>
    <BarChart data={userStatus}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="value" fill="#8884d8"/>
    </BarChart>
</ResponsiveContainer> */}