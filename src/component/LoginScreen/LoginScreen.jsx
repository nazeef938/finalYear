import React from 'react'
import { Link } from "react-router-dom";
import web from "../../images/img2.jpg";
import "./LoginScreen.css";
import TextField from '@mui/material/TextField';
export default function LoginScreen() {
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
                                    <TextField className='input-field' id="outlined-basic" label="Email" variant="outlined" InputProps={{startAdornment: <i className="zmdi zmdi-email material-icons-name"></i>,}}/>
                                </div>
                                <div className="form-group">
                                    <TextField className='input-field' id="outlined-basic" label="Password" variant="outlined" InputProps={{startAdornment: <i className="zmdi zmdi-lock material-icons-name"></i>,}}/>
                                </div>
                            </form>
                            </form>
                            <div className="mt-3">
                                <Link to="#"  className="btn-started">Login</Link>
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