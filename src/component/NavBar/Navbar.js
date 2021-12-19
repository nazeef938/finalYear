import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <>
  <div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-12 mx-auto">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">GATE EXAM</Link>
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">ContactUs</Link>
        </li>
      </ul>
  </div>
</nav>
</div>
</div>
</div>
</>
    );
};

export default Navbar;