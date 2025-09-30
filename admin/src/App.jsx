import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Approvepending from "./pages/Approvepending";
import Approved from "./pages/Approved";
import Rejected from "./pages/Rejected"
import Vehicle from './pages/Vehicle';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pendingapprove" element={<Approvepending/>}/>
        <Route path="/approved" element={<Approved/>}/>
        <Route path='/vehiclecheck' element={<Vehicle/>}/>
        <Route path="/rejected" element={<Rejected/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;