import React from 'react'
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = import.meta.env.VITE_SERVER_URL;
                // console.log(url)
                const token = localStorage.getItem("token");

                const res = await fetch(`${url}/admin/me`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                const data = await res.json();
                if(!data.success){
                    console.log(data.error);
                    return;
                }
                // console.log(data.data, "this is data")
                setAdmin(data.data)
                // console.log(data.data.name,"this is name")
            }
            catch (error) {
                alert("Something went wrong");
                console.log(error)
            }
        }
            fetchData();

    },[]);

    return (
        <AuthContext.Provider value={{admin, setAdmin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;