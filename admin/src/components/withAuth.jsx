import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Loader} from 'lucide-react'
import style from "../styles/withAuth.module.css"
import { AuthContext } from '../context/AuthProvider'

const withAuth = (WrappedComponent)  => (props) => {
    const navigate = useNavigate();
    const {admin, loading} = useContext(AuthContext);
    console.log(admin , "this is admin")

    useEffect(() => {
        if(!admin && !loading){
            navigate("/login");
        }
    }, [loading]);

   if (loading) return <Loading />;

  return admin ? <WrappedComponent {...props}/> : null;
}

const Loading = () => {
    <div className={style.loader}>
        <div><Loader/></div>
    </div>
}

export default withAuth;