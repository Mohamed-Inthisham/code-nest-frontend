import React from 'react'
import '../css/InternshipReqForm.css'

export default function InternshipReqForm() {
  return (
    <div>

<>
  
  <title>
    Internship Request Form
  </title>

<div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <span className="app-brand-text demo menu-text fw-bold ms-2">
              Java Basics
            </span>
        </div>
        <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
          
          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Java Introduction</div>
            </a>
           
          </li>

          <li className="menu-item ">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Java Output</div>
            </a>
           
          </li>

          <li className="menu-item ">
            <a href="" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Java Comments</div>
            </a>
           
          </li>

          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Java Variables</div>
            </a>
           
          </li>

         <div className='certificatebtn'>
            <a href="#" target="_blank" class="btn rounded-pill btn-outline-success">Claim Certificate</a>
         </div>
         <div className="internshipReqBtn">
            <a href="#" class="btn btn-dark">Internship Request</a>
         </div>
       
      
      </ul>
  </aside>
 

    <div className="layout-page">

    <div class="row">
                <div class="col-lg">
                  <div class="card mb-8 ">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h3 class="mb-0"><b>Request to Internship</b></h3>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-fullname">Full Name</label>
                          <input type="text" class="form-control" id="basic-default-fullname" placeholder="Enter full Name" />
                        </div>
              
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-email">Email</label>
                          <div class="input-group input-group-merge">
                            <input
                              type="email"
                              id="basic-default-email"
                              class="form-control" placeholder="Enter your email" /> 
                          </div>
                          
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-phone">Phone No</label>
                          <input
                            type="text"
                            id="basic-default-phone"
                            class="form-control phone"
                            placeholder="Enter Phone number"/>
                        </div>
                        <div class="mb-3">
                              <label class="form-label" for="basic-default-file">Upload Your CV/Resume</label>
                              <input type="file" class="form-control" id="basic-default-file"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                        
                      </form>
                    </div>
                  </div>
                </div>
              
              </div>
       
        
      </div>
      
    </div>
    
    
  </div>
  
  
  
 </>


</div>
  )
}
