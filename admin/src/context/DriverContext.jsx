import React, { createContext, useEffect, useState } from 'react'

export const DriverProvider = createContext();

const DriverContext = ({children}) => {
     const [driverCount, setDrivercount] = useState(0);
      const [driverStatus, setDriverStatus] = useState([]);
      const [approved, setApproved] = useState([]);
      const [pending, setPending] = useState([]);
      const [rejected, setRejected] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const url = import.meta.env.VITE_SERVER_URL;
            const token = localStorage.getItem("token");
    
            const driver = await fetch(`${url}/admin/handleUser/getdrivers`, {
              method:"GET",
              headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
              }
            });
    
            const res1 = await driver.json();
    
            if(!res1){
              alert("Something went wrong while fetching driver");
            }
    
            setDrivercount(res1.data.length);
            
            const pending = res1.data.filter((i) => {
              return i.verificationStatus === "pending"
            });
            // console.log(pending, "pending drivers");

            setPending(pending);
    
            const approved = res1.data.filter((i) => {
              return i.verificationStatus === "approved"
            });
            // console.log(approved, "approved drivers");
            
            setApproved(approved);

            const rejected = res1.data.filter((i) => {
              return i.verificationStatus === "rejected"
            });
            // console.log(rejected, "rejected drivers");

            setRejected(rejected)
    
            setDriverStatus([
              {name:"Pending", value: pending.length},
              {name:"Approved", value: approved.length},
              {name: "Rejected", value: rejected.length}
            ]);
    
          } catch (error) {
            console.log(error);
            alert("Something went wrong");
          }
        }
        fetchData();
      },[]);
  return (
    <DriverProvider.Provider value={{driverStatus, approved, pending, rejected}}>
        {children}
    </DriverProvider.Provider>
  )
}

export default DriverContext