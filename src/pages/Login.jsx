import React from 'react';
import '../css/Login.css';

const Login = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
  />
  <title>
    Login Basic - Pages | Sneat - Bootstrap 5 HTML Admin Template - Pro
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
        <div><br></br>
          <br></br>
        </div>
        {/* Register */}
        <div className="card cardv-login">
          <div className="card-body">
            {/* Logo */}
            <div className="app-brand justify-content-center">
              <a href="index.html" className="app-brand-link gap-2">
              
              </a>
            </div>
            {/* /Logo */}
            <br></br>
            <h4 className="mb-2">Welcome to Code Nest! 👋</h4>
            
            <p className="mb-4">
              <br></br>
              Please Sign-In to your account and start the learning..
            </p>
            <form id="formAuthentication" className="mb-3" action="index.html">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email or Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email or username"
                  autofocus=""
                />
              </div>
              <div className="mb-3 form-password-toggle">
                <div className="d-flex justify-content-between">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <a href="auth-forgot-password-basic.html">
                    <small className='cursor-pointer'>Forgot Password?</small>
                  </a>
                </div>
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
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember-me"
                  />
                  <label className="form-check-label" htmlFor="remember-me">
                    {" "}
                    Remember Me{" "}
                  </label>
                </div>
              </div>
              <div><br></br></div>
              <div className="mb-3">
                <button className="btn btn-primary d-grid w-100" type="submit">
                  Sign in
                </button>
              </div>
            </form>
            <p className="text-center">
              <span>New on our platform?</span>
              <a href="register">
                <span className='cursor-pointer'> Create an account</span>
              </a>
            </p>
            </div>
        </div>
        {/* /Register */}
      </div>
    </div>
  </div>
  {/* / Content */}
  
  {/* Core JS */}
  {/* build:js assets/vendor/js/core.js */}
  {/* endbuild */}
  {/* Vendors JS */}
  {/* Main JS */}
  {/* Page JS */}
  {/* Place this tag in your head or just before your close body tag. */}
</>

  );
};

export default Login;