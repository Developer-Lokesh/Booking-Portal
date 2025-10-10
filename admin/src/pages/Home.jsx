// import React, { useEffect, useState } from 'react';
import style from "../styles/home.module.css";
import Layout from '../components/Layout';
import Drivergraph from '../components/Drivergraph';
import Usergraph from '../components/Usergraph';
import Pending from "../components/Pending";
import Approved from "../components/Approved";
import Rejected from "../components/Rejected";
// import UserContext from "../context/UserContext";
// import { useContext } from "react";

const Home = () => {
  // const [loading, setLoading] = useState(false)
  return (
    <Layout>
      <div className={style.body}>
        

          <div className={style.card}> <Usergraph /> </div>
          <div className={style.card}> <Approved /> </div>
          <div className={style.card}> <Drivergraph /> </div>
          <div className={style.card}> <Pending /> </div>
          <div className={style.card}> <Rejected /> </div>
          
      </div>


    </Layout>
  )
}

export default Home;