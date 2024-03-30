import React from 'react';
import '../css/MentorHomePage.css';

const MentorHomePage = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
  />
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
  <link rel="stylesheet" href="../assets/vendor/css/pages/page-icons.css" />
  {/* Helpers */}
  {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
  {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
  {/* Layout wrapper */}
  
            {/* Icon container */}
            <div className="buttonv" id="icons-containerv"> 
              <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
              <button className='btnv'><a href="/viewRoadmap">
                <div className='mainv'>
                <div className="card-body card-bodyv">
                  <i className="bx bxs-book mb-2" />
                  <p className="icon-name namev text-capitalize text-truncate cursor-pointer mb-0">
                    Resourses
                  </p>
                </div>
                </div>
                </a>
              </button>
              </div>
              
              <div className="card  icon-card cursor-pointer text-center mb-4 mx-2">
              <div className='mainv'>
                <div className="card-body card-bodyv">
                  <i className="bx bxs-conversation mb-2" />
                  <p className="icon-name namev text-capitalize text-truncate cursor-pointer mb-0">
                    Discuss
                  </p>
                </div>
                </div>
              </div>
              <div className="card icon-card cursor-pointer text-center mb-4 mx-2">
              <div className='mainv'>
                <div className="card-body card-bodyv">
                  <i className="bx bxl-microsoft-teams mb-2" />
                  <p className="icon-name namev text-capitalize text-truncate cursor-pointer mb-0">
                    Live Mentor Requests
                  </p>
                </div>
                </div>
              </div>
            </div>
</>

  )}

  export default MentorHomePage;