import React, { useEffect, useState } from 'react';
import style from "../styles/home.module.css";
import Layout from '../components/Layout';
import Drivergraph from '../components/Drivergraph';
import Usergraph from '../components/Usergraph';

const Home = () => { 
  
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.graphcontainer}>
          <div className={style.graphSection}>
            <Usergraph/>
            <Usergraph/>
            <Drivergraph/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;