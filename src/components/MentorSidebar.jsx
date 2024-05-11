import React from 'react'
import '../css/MentorSidebar.css'

function MentorSidebar() {
  return (
    <div className='d-inline-flex p-2 bd-highlight'>

            <div className="layout-wrapper layout-content-navbar">
                        <div className="layout-container qz">
                        
                        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                            <div className="app-brand demo">
                            <a href="index.html" className="app-brand-link">
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                                <i className="bx bx-chevron-left bx-sm align-middle" />
                            </a>
                            </div>
                            <div className="menu-inner-shadow" />
                            <ul className="menu-inner py-1">

                            
                            <li className="menu-item active open">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                
                                <div data-i18n="Layouts">Roadmap</div>
                                </a>
                                <ul className="menu-sub menu">
                                {/* <li className="menu-item item">
                                    <a href="/viewRoadmap" className="menu-link">
                                    <div data-i18n="Without menu">View Roadmap</div>
                                    </a>
                                </li> */}
                                <li className="menu-item ">
                                    <a href="/manageRoadmaps" className="menu-link" style={{ cursor: 'pointer' }}>
                                    <div data-i18n="Without navbar">Manage Roadmap</div>
                                    </a>
                                </li>
                                </ul>
                            </li>

                            <li className="menu-item active open">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                
                                <div data-i18n="Layouts">Resourses</div>
                                </a>
                                <ul className="menu-sub">
                                {/* <li className="menu-item">
                                    <a href="/viewResourses" className="menu-link"> 
                                    <div data-i18n="Without menu">View Resourses</div>
                                    </a>
                                </li> */}
                                <li className="menu-item ">
                                    <a href="/ManageResourses" className="menu-link" style={{ cursor: 'pointer' }}>   
                                    <div data-i18n="Without navbar">Manage Resourses</div>
                                    </a>
                                </li>
                                </ul>
                            </li>

                            {/* <li className="menu-item active ">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                
                                <div data-i18n="Layouts">Intern</div>
                                </a>
                                </li> */}
                                 <li className="menu-item active">
                                <a href="/MentorApprovalReqForm" className="menu-link" style={{ cursor: 'pointer' }}>
                                <div data-i18n="Layouts">Approval Request</div>
                                </a>
                            </li>        
                    
                            </ul>
                        </aside>
                        
                        
                        <div className="layout-page page">
                        
                        
                        
                        </div>
                        
                        </div>
                    
                        <div className="layout-overlay layout-menu-toggle" />
            
            </div>


    </div>
  )
}

export default MentorSidebar