import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";

const Layout = () => {
    const location = useLocation();
    const hideHeader = ["/login", "/signup"]
    const isHide = !hideHeader.includes(location.pathname)
  return (
    <div>
        {isHide && <Header/>}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default Layout

