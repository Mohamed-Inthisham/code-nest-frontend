import React from 'react'
import CompanySidebar from '../components/CompanySidebar'
import '../css/ManageRoadmaps.css'
import MentorSidebar from '../components/MentorSidebar'

function ManageRoadmaps() {
  return (
    
    <div class="d-inline-flex p-2 bd-highlight">

        <MentorSidebar />
        <h1 className='text-one coursetitle'>Manage Roadmaps</h1>

        <div className='armv'>
        <button type="button" class="btn btn-primary arm"><a className='roadmapStyle' href='/addRoadmap'>Add Roadmap</a></button>
        </div>

        <div>

        <div class="card managecourse">
                
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr>
                        <th><h4>Roadmap Name</h4></th>
                        <th><h4>Mentor</h4></th>
                        <th><h4>Action</h4></th>
                        
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr>
                        <td>
                          <i class="bx  bx-sm me-3"></i>
                          <span class="textv">Java Road Map</span>
                        </td>
                        
                        <td>
                          <div class="manageroadmap">
                            <h5 type="text" class="manageroadmaptxt" >
                              K.L Santhush
                            </h5>
                            
                             </div>
                        </td>

                        <td>
                          <div class="manageroadmap">
                            <button type="button" class="manageroadmapbtn1" >
                              Delete
                            </button>
                             </div>
                        </td>
                      </tr>


                      <tr>
                        <td>
                          <i class="bx  bx-sm me-3"></i>
                          <span class="textv">.Net Road Map</span>
                        </td>
                        
                        <td>
                          <div class="manageroadmap">
                            <h5 type="text" class="manageroadmaptxt" >
                              A.H Divya
                            </h5>
                            
                             </div>
                        </td>

                        <td>
                          <div class="manageroadmap">
                            <button type="button" class="manageroadmapbtn1" >
                              Delete
                            </button>
                             </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <i class="bx  bx-sm me-3"></i>
                          <span class="textv">Java Operators</span>
                        </td>
                        
                        <td>
                          <div class="manageroadmap">
                            <h5 type="text" class="manageroadmaptxt" >
                              M.M Fernando
                            </h5>
                            
                             </div>
                        </td>

                        <td>
                          <div class="manageroadmap">
                            <button type="button" class="manageroadmapbtn1" >
                              Delete
                            </button>
                             </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <i class="bx  bx-sm me-3"></i>
                          <span class="textv">Frontend Developer</span>
                        </td>
                        
                        <td>
                          <div class="manageroadmap">
                            <h5 type="text" class="manageroadmaptxt" >
                              B.P.A Nora
                            </h5>
                            
                             </div>
                        </td>

                        <td>
                          <div class="manageroadmap">
                            <button type="button" class="manageroadmapbtn1" >
                              Delete
                            </button>
                             </div>
                        </td>
                      </tr>

                      

                      
                      <tr>
                        <td>
                          <i class="bx  bx-sm me-3"></i>
                          <span class="textv">Java Script Road Map</span>
                        </td>

                        <td>
                          <div class="manageroadmap">
                            <h5 type="text" class="manageroadmaptxt" >
                              N.Y Perera
                            </h5>
                            
                             </div>
                        </td>
                        
                        <td>
                          <div class="manageroadmap">
                            <button type="button" class="manageroadmapbtn1" >
                              Delete
                            </button>
                             </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
        </div>
        
    </div>
    
  )
}

export default ManageRoadmaps