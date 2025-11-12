import React, { useState } from 'react'
import Layout from '../components/Layout'
import style from "../styles/verification.module.css"
import styles from "../styles/loading.module.css"
import { format } from "date-fns"

// import { useContext } from 'react'
// import { DriverProvider } from '../context/DriverContext'
import { useParams, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Check, Loader, MoveRight, X } from 'lucide-react'

const Approve = () => {
  // const {pending} = useContext(DriverProvider);
  // const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false)
  const [driver, setDriver] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [permit, setPermit] = useState(null);
  // const [date, setDate] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const url = import.meta.env.VITE_SERVER_URL;
        const token = localStorage.getItem("token")
        const res = await fetch(`${url}/admin/verification/profile/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })

        const data = await res.json();
        // console.log(data.data.driverData);
        // console.log(data.data.permitData);
        // console.log(data.data.vehicleData);
        // const formattedDate = format(new Date(permit.validityDate), 'dd MMM YYYY')

        // console.log(data.data.permitData.vehicleInfo);
        if (data) {
          // console.log("Something went wrong");
          setDriver(data.data.driverData);
          setVehicle(data.data.vehicleData);
          setPermit(data.data.permitData);
          // setDate(formattedDate)
        } else {
          console.log("Something went wrong in approve.jsx")
        }
        // console.log("data", data, "this is data");
        // console.log(driver.driverImgURL)

      } catch (error) {
        console.log(error, "this is error");
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [id])

  const rejectHandler = async () => {
    // const id = useParams()
    if(!id){
      console.log("id is missing in approve")
    }
    const url = import.meta.env.VITE_SERVER_URL;
    const token = localStorage.getItem("token")
    const res = await fetch(`${url}/admin/verification/reject-driver/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
          verificationStatus: "rejected",
          isVerified: false
        })
    })
    const data = await res.json();
    console.log(data)
  }

  const approveHandler = async () => {
    if(!id){
      console.log("id is missing in approve ");
    }
    const url = import.meta.env.VITE_SERVER_URL;
    const token = localStorage.getItem("token");
    const res = await fetch(`${url}/admin/verification/approve-driver/${id}`, {
      method:"PUT",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body:JSON.stringify({
        verificationStatus: "approved",
        isVarified: true
      })

    })
    const data = await res.json();
    console.log(data)
  }

  return (
    <Layout>
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.loader}><Loader size={50} /></div><br />
        </div>
      ) : (
        <div className={style.container}>
          <h1 className={style.heading}>Driver verification</h1>
          <div className={style.body}>
            <div className={style.cards}>
              <div>
                {driver && driver.driverImgURL ? (
                  <div className={style.driver}>
                    <img src={driver.driverImgURL} alt={`${driver.name}'s Profile`} />
                    <div>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>Name :- </li>
                          <li>{driver.name}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>Email :- </li>
                          <li>{driver.email}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>Phone :- </li>
                          <li>{driver.phone}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>License No. :- </li>
                          <li>{driver.licenseNumber}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>Verification Status :- </li>
                          <li>{driver.verificationStatus}</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                ) :
                  (
                    <h1>No image found</h1>
                  )}
              </div>
            </div>

            <div className={style.cards}>
              <div>
                {vehicle && vehicle.vehicleImgURL ? (
                  <div className={style.driver}>
                    <img src={vehicle.vehicleImgURL} alt={`${vehicle.vehicleName}'s image`} />
                    <div>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>Vehicle Brand :- </li>
                          <li>{vehicle.vehicleName}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li> Vehicle Number :- </li>
                          <li>{vehicle.numberPlate}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li> RC :- </li>
                          <li>{vehicle.RC}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>Vehicle Color :- </li>
                          <li>{vehicle.color}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>Vehicle Model :- </li>
                          <li>{vehicle.model}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>Capacity :- </li>
                          <li>{vehicle.capacity}</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                ) :
                  (
                    <h1>No image found</h1>
                  )}
              </div>
            </div>

            <div className={style.cards}>
              <div>
                {permit && permit.permitImgURL ? (
                  <div className={style.driver}>
                    <img src={permit.permitImgURL} alt={`Permit Image`} />
                    <div>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>Registration Number :- </li>
                          <li>{permit.registrationNumber}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>RC :- </li>
                          <li>{permit.RC}</li>
                        </ul>
                      </span>
                      <span className={style.elements}>
                        <ul className={style.element}>
                          <li>Validity Date :- </li>
                          <li>{permit.validityDate}</li>
                          {/* <li>{date}</li> */}
                        </ul>
                      </span>
                    </div>
                  </div>
                ) :
                  (
                    <h1>No image found</h1>
                  )}
              </div>
            </div>
            {driver && driver.verificationStatus === "pending" ? (
              <div className={style.btnContainer}>
                <button className={style.reject} onClick={rejectHandler}> <X />  Reject</button>
                <button className={style.approve} onClick={approveHandler}><Check /> Approve</button>
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>
      )}


    </Layout>
  )
}

export default Approve;