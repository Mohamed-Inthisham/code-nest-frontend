import React from "react";
import '../css/Navbar.css'
import Logo from '../images/removerLogo.png'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-example navbar-expand-lg bg-dark">
        <div className="container-fluid">
        <div><span > <Link to="/homepage"><img className="logo" style={{ cursor: 'pointer' }} src={Logo} alt="" /></Link></span></div>
          
          <div className="collapse navbar-collapse" id="navbar-ex-3">
            <div className="navbar-nav me-auto navlinks">
              
            {/* <div className="navbar-nav me-auto navlinks">  
              <a className="nav-item nav-link" href="/homepage" style={{ cursor: 'pointer' }}>Home</a>
              <a className="nav-item nav-link" href="/courses" style={{ cursor: 'pointer' }}>Courses</a>
              <a className="nav-item nav-link" href="/mentoring" style={{ cursor: 'pointer' }}>Mentoring</a>
            </div> */}

            </div>
            <div>
            <button><a className="nav-item nav-linkvmentor" href="/" style={{ cursor: 'pointer' }}>Log Out</a></button>
            <i className="bx bx-user-circle" id="userlogo" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
