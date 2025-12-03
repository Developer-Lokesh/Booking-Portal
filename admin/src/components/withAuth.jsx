import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Loader} from 'lucide-react'
import style from "../styles/withAuth.module.css"
import { AuthContext } from '../context/AuthProvider'

const withAuth = (WrappedComponent)  => (props) => {
    const navigate = useNavigate();
    const {admin, loading} = useContext(AuthContext);

    useEffect(() => {
        if(!admin && !loading){
            navigate("/login");
        }
    }, [admin, loading]); 

  return admin ? <WrappedComponent {...props}/> : <Loading/>;
}

const Loading = () => {
    return (
        <div className={style.loader}>
        <div><Loader/></div>
    </div>
    )
}

export default withAuth;