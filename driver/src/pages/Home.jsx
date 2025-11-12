import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>Home
      <div>
        <Link to={"/signup"}>SignUp</Link><br/>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  )
}

export default Home;