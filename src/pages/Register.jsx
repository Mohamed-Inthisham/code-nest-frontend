import React from 'react';
import '../css/Register.css';

const Register = () => {
  return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
  />
  <title>
    Register Basic - Pages | Sneat - Bootstrap 5 HTML Admin Template - Pro
  </title>
  <meta name="description" content="" />
  {/* Favicon */}
  <link
    rel="icon"
    type="image/x-icon"
    href="../assets/img/favicon/favicon.ico"
  />
  {/* Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
  {/* Core CSS */}
  <link
    rel="stylesheet"
    href="../assets/vendor/css/core.css"
    className="template-customizer-core-css"
  />
  <link
    rel="stylesheet"
    href="../assets/vendor/css/theme-default.css"
    className="template-customizer-theme-css"
  />
  <link rel="stylesheet" href="../assets/css/demo.css" />
  {/* Vendors CSS */}
  <link
    rel="stylesheet"
    href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
  />
  {/* Page CSS */}
  {/* Page */}
  <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />
  {/* Helpers */}
  {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
  {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
  {/* Content */}
  <div className="container-xxlv">
    <div className="authentication-wrapperv authentication-basic container-p-y">
      <div className="authentication-innerv">
        {/* Register Card */}
        <div className="card">
          <div className='cardv-reg'>
          <div className="card-body">
            {/* Logo */}
            <div className="app-brand justify-content-center">
              <a href="index.html" className="app-brand-link gap-2">
                
              </a>
            </div>
            {/* /Logo */}
            
            <h4 className="mb-2">Learning starts here 🚀</h4>
            {/* <p className="mb-4">Make your app management easy and fun!</p> */}
            <form id="formAuthentication" className="mb-3" action="index.html">
              <div className="mb-2">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your first name"
                  autofocus=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your last name"
                  autofocus=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  autofocus=""
                />
              </div>
              <div className="mb-3 form-password-toggle">
                <label className="form-label" htmlFor="password">
                Password
                </label>
                <div className="input-group input-group-merge">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="············"
                    aria-describedby="password"
                  />
                  <span className="input-group-text cursor-pointer">
                    <i className="bx bx-hide" />
                  </span>
                </div>
              </div>
              <div className="mb-3 form-password-toggle">
                <label className="form-label" htmlFor="password">
                Re-type Password
                </label>
                <div className="input-group input-group-merge">
                  <input
                    type="password"
                    id="re-type_password"
                    className="form-control"
                    name="re-type_password"
                    placeholder="············"
                    aria-describedby="password"
                  />
                  <span className="input-group-text cursor-pointer">
                    <i className="bx bx-hide" />
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms-conditions"
                    name="terms"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="terms-conditions"
                  >
                    I agree to
                    <a href="javascript:void(0);"> privacy policy &amp; terms</a>
                  </label>
                </div>
              </div>
              <button className="btn btn-primary d-grid w-100">Sign up</button>
            </form>
            <p className="text-center">
              <span>Already have an account?</span>
              <a href="/">
                <span> Sign in instead</span>
              </a>
            </p>
          </div>
          </div>
        </div>
        {/* Register Card */}
      </div>
    </div>
  </div>
  {/* / Content */}
  ?
  {/* Core JS */}
  {/* build:js assets/vendor/js/core.js */}
  {/* endbuild */}
  {/* Vendors JS */}
  {/* Main JS */}
  {/* Page JS */}
  {/* Place this tag in your head or just before your close body tag. */}
</>
  )
}

export default Register;
