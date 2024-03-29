import React from "react";
import '../css/Navbar.css'
import Logo from '../images/logo.jpeg'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-example navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div><span ><img className="logo" src={Logo} alt="" /></span></div>
          
          <div className="collapse navbar-collapse" id="navbar-ex-3">
            <div className="navbar-nav me-auto navlinks">
            <div className="navbar-nav me-auto navlinks">  
              <a className="nav-item nav-link" href="/homepage">Home</a>
              <a className="nav-item nav-link" href="/courses">Courses</a>
              <a className="nav-item nav-link" href="/mentoring">Mentoring</a>
            </div>

            </div>
            <div>
            <i className="bx bx-user-circle" id="userlogo" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
