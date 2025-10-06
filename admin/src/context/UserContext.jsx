import React from 'react'
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

export const UserProvider = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
               const url = import.meta.env.VITE_SERVER_URL;
               const token = localStorage.getItem("token");
               
                const res = await fetch(`${url}/admin/handleUser/getusers`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                const data = await res.json();

                if(!data.success){
                    alert("Something went wrong");
                    return;
                }

                setUser(data.data);
            } catch (error) {
                console.log(error);
                return;
            }
        }
        fetchData();
    },[]);
  return (
    <UserProvider.Provider value={{ user , setUser}}>
        {children}
    </UserProvider.Provider>
  )
}

export default UserContext