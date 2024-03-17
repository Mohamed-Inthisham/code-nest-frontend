import React from 'react';
import '../pages/Login.css';

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
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            {/* Register */}
            <div className="card">
              <div className="card-body">
                {/* Logo */}
                <div className="app-brand justify-content-center">
                  <a href="index.html" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo">
                      <svg
                        width={25}
                        viewBox="0 0 25 42"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        {/* Your SVG content */}
                      </svg>
                    </span>
                    <span className="app-brand-text demo text-body fw-bold">
                      Code Nest
                    </span>
                  </a>
                </div>
                {/* /Logo */}
                <h4 className="mb-2">Welcome to Code Nest! 👋</h4>
                <p className="mb-4">
                  Please sign-in to your account and start the learning
                </p>
                <form id="formAuthentication" className="mb-3" action="index.html">
                  {/* Your form elements */}
                </form>
                <p className="text-center">
                  <span>New on our platform?</span>
                  <a href="auth-register-basic.html">
                    <span>Create an account</span>
                  </a>
                </p>
              </div>
            </div>
            {/* /Register */}
          </div>
        </div>
      </div>
      {/* / Content */}
      <div className="buy-now">
        <a
          href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/"
          target="_blank"
          className="btn btn-danger btn-buy-now"
        >
          Upgrade to Pro
        </a>
      </div>
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