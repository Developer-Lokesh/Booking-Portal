import React from 'react'
import style from "../styles/home.module.css"
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div>
      <Header />
      <div className={style.body}>
        <div>
          <Sidebar />
          
        </div>
        dashboard
      </div>
    </div>
  )
}

export default Home;