import React, { useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import web from "../../images/img2.jpg";
import "./LoginScreen.css";
import TextField from '@mui/material/TextField';
import { BASE_URL, ERROR } from '../../config/constants';
export default function LoginScreen() {
    const [user,setUser] = useState({email:"",password:""})
    const handleLogin = async () => {
        const response = await axios.post(`${BASE_URL}/login`,user)
        if(response.data.status == ERROR) {
            return alert(response.data.error)
        }
        console.log(response.data)
        localStorage.user = JSON.stringify(response.data.user)
        localStorage.accessToken = response.data.accessToken
    }

    return (
        <>
           <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-1 d-flex justify-content-center flex-column">
                            <div className="text">
                                Log In
                            </div>
                            <form>
                            <form className="register-form" id="register-form"> 
                                <div className="form-group">
                                    <TextField className='input-field' id="outlined-basic" label="Email" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}} variant="outlined" InputProps={{startAdornment: <i className="zmdi zmdi-email material-icons-name"></i>,}}/>
                                </div>
                                <div className="form-group">
                                    <TextField className='input-field' id="outlined-basic" label="Password" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}} variant="outlined" InputProps={{startAdornment: <i className="zmdi zmdi-lock material-icons-name"></i>,}}/>
                                </div>
                            </form>
                            </form>
                            <div className="mt-3">
                                <Link to="#"  className="btn-started" onClick={handleLogin}>Login</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img pt-5">
                            <img src={web} className="img-fluid animated" alt="error"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>     
        </>
    )
}