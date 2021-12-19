import React from "react";
import { Link } from "react-router-dom";
import web from "../../images/6.png";
export default function HomeScreen(){
    return(
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-1 d-flex justify-content-center flex-column">
                            <h1><strong>Practice Exam Portal For(GATE) Graduate Aptitude Test in Engineering</strong></h1>
                            <div className="mt-3">
                                <Link to="/signup"  className="btn-get-started">Signup/Login</Link>
                                <Link to="/login" > <h6> Already have an account</h6></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img pt-5">
                            <img src={web} className="img-fluid animated" alt="error" style={{width:"70%"}}/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}


