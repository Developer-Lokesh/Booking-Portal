import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import Vehicle from './pages/Vehicle'
import Permit from './pages/Permit'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/vehicleregistration' element={<Vehicle/>}/>
          <Route path='/permit' element={<Permit/>}/>
          
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
