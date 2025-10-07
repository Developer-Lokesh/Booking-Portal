import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Approvepending from "./pages/Approvepending";
import Approved from "./pages/Approved";
import Rejected from "./pages/Rejected"
// import Vehicle from './pages/Vehicle';
import Approve from './pages/Approve';
import AuthProvider from './context/AuthProvider';
import UserContext from './context/UserContext';
import DriverContext from './context/DriverContext';
import User from './pages/User';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserContext>
          <DriverContext>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pendingapprove" element={<Approvepending />} />
            <Route path="/approved" element={<Approved />} />
            <Route path="/approve" element={<Approve />} />
            {/* <Route path='/vehiclecheck' element={<Vehicle/>}/> */}
            <Route path="/rejected" element={<Rejected />} />
            <Route path="/users" element={<User/>}/>
            <Route path="/login" element={<Login />} />
          </Routes>
          </DriverContext>
        </UserContext>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;