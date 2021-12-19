import React from "react";
import web from "../../images/6.png";
import { Link } from "react-router-dom";
import "./SignupScreen.css"
const SignupScreen = () => {
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
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Your email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" placeholder="Your Number"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Your Password"/>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register"/>
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
};
export default SignupScreen;