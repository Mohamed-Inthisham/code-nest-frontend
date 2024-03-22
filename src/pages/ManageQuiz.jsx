import React from 'react'
import { Link } from 'react-router-dom';

export default function ManageQuiz() {
  return (
    
    <div>

<>
  <div className="layout-wrapper layout-content-navbar nav">
    <div className="layout-container qz">
      
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="index.html" className="app-brand-link">
           
            
          </a>
          <a
            href="javascript:void(0);"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle" />
          </a>
        </div>
        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1">

          
          <li className="menu-item active open">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Courses</div>
            </a>
            <ul className="menu-sub menu">
              <li className="menu-item item">
                <a href="layouts-without-menu.html" className="menu-link">
                  <div data-i18n="Without menu">View Courses</div>
                </a>
              </li>
              <li className="menu-item ">
                <a href="layouts-without-navbar.html" className="menu-link">
                  <div data-i18n="Without navbar">Manage Courses</div>
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-item active open">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Quizzes</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="layouts-without-menu.html" className="menu-link">
                  <div data-i18n="Without menu">View Quizzes</div>
                </a>
              </li>
              <li className="menu-item ">
                <a href="layouts-without-navbar.html" className="menu-link">
                  <div data-i18n="Without navbar">Manage Quizzes</div>
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-item active ">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Intern</div>
            </a>
            </li>
  
        </ul>
      </aside>
    
      
      <div className="layout-page page">
       
       <h3>Manage Quiz</h3>
       
      </div>
      
    </div>
 
    <div className="layout-overlay layout-menu-toggle" />
  </div>



</>


    </div>

  )
}
