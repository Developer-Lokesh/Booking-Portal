import { useEffect, useState } from "react";
import style from "../styles/login.module.css"
const Login = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

     useEffect(()=>{
            if(localStorage.getItem("token")){
                window.location.href = "/login"
            }
        },[]);

    const inputHandler = (e) => {
        const eleName = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [eleName] : value})
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!formData.email){
            alert("Please enter the Email");
            return;
        }
        if(!formData.password){
            alert("Please enter the password");
            return;
        }
        try {
            setLoading(true);

            const url = import.meta.env.VITE_SERVER_URL;
            const res = await fetch(`${url}/auth/login`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log(data);
            if(!data.success){
                console.log(data.error);
                return;
            }

            if(data.data.user.role !== "admin"){
                alert("You are not an admin");
                return;
            }
            // console.log(data.data.name)

            const token = data.data.accesstoken;
            const reftoken = data.data.reftoken;
            console.log(token, "this is token");

            localStorage.setItem("token", token);
            localStorage.setItem("reftoken", reftoken);

            window.location.href="/"
        } catch (error) {
            console.log("error :- " ,error)
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className={style.body}>
            <form className={style.form} onSubmit={submitHandler}>

                <h1 className={style.heading}>Login</h1>

                <label className={style.title}>E-mail</label>

                <input value={formData.email} name="email" onChange={inputHandler} type="email" placeholder="Enter the Email" className={style.input} />

                <label className={style.title}>Password</label>

                <input value={formData.password} name="password" onChange={inputHandler} type="password" placeholder="Enter the password" className={style.input} />

                <button className={style.button}>Login</button>

            </form>
        </div>
    )
}

export default Login;