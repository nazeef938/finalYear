import React from "react";
import web from "../../images/6.png";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "./SignupScreen.css"
import TextField from '@mui/material/TextField';

export default function SignupScreen(){
    return(
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="vl"></div>
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form className="register-form" id="register-form"> 
                                <div className="form-group">
                                    <TextField className='input-field' id="outlined-basic" label="Name" variant="outlined" InputProps={{startAdornment: <i className="zmdi zmdi-account material-icons-name"></i>,}}/>
                                </div>
                                <div className="form-group">
                                    <TextField className='input-field' id="outlined-basic" label="Email" variant="outlined" InputProps={{startAdornment: <i className="zmdi zmdi-email material-icons-name"></i>,}}/>
                                </div>
                                <div className="form-group">
                                    <TextField className='input-field' id="outlined-basic" label="Phone" variant="outlined" InputProps={{startAdornment: <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>,}}/>
                                </div>
                                <div className="form-group">
                                    <TextField className='input-field' id="outlined-basic" label="Password" variant="outlined" InputProps={{startAdornment: <i className="zmdi zmdi-lock material-icons-name"></i>,}}/>
                                </div>
                                <div className="form-group">
                                    <TextField className='input-field' id="outlined-basic" label="Confirm Password" variant="outlined" InputProps={{startAdornment: <i className="zmdi zmdi-lock material-icons-name"></i>,}}/>
                                </div>
                                <div className="form-group form-button">
                                <Button variant="contained">Register</Button>
                                </div>
                                <Link to="/login" className="signup-image-Link">I am already register</Link>
                            </form>
                        </div>
                        <div className="vl"></div>
                            <div className="signup-image">
                                <figure>
                                    <img src={web}className="img-fluid animated" alt="registration pic"/>
                                </figure>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}