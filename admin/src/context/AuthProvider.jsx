import React from 'react'
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true)
    // console.log(admin,"hi admin")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = import.meta.env.VITE_SERVER_URL;
                const token = localStorage.getItem("token");
                // if(!token){
                //     setAdmin(null)
                //     setLoading(false)
                //     return;
                // }

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
                    // localStorage.removeItem("token")
                    // localStorage.removeItem("reftoken")
                    // return;
                }
                setAdmin(data.data)
                // console.log(data.data, "this");
            }
            catch (error) {
                console.log(error)
            } 
            finally {
                setLoading(false)
            }
        }
            fetchData();

    },[]);

    return (
        <AuthContext.Provider value={{admin, setAdmin, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;