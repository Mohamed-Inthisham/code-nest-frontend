import React from 'react'
import CompanySidebar from '../components/CompanySidebar'
import '../css/ManageCourses.css'

function ManageCourses() {
  return (
    
    <div class="d-inline-flex p-2 bd-highlight">

        <CompanySidebar />
        <h1 className='text-one coursetitle'>Manage Courses</h1>

        <div className='qwe'>
        <button type="button" className='rty' > <h1 ><a className='courseStyle' href='/addCourses'>Add Courses</a></h1> </button>
        </div>

        <div>

        <div class="card managecourse">
                
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr>
                        <th><h4>Course Name</h4></th>
                        <th><h4>Action</h4></th>
                        
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr>
                        <td>
                          <i class="bx bxl-angular bx-sm text-danger me-3"></i>
                          <span class="fw-medium">Angular Project</span>
                        </td>
                        
                        <td>
                          <div class="managecoursebtnmain">
                            <button type="button" class="managecoursebtn1" >
                              Delete
                            </button>
                            <button type="button" class="managecoursebtn2" >
                              Edit
                            </button>
                             </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i class="bx bxl-react bx-sm text-info me-3"></i> <span class="fw-medium">React Project</span>
                        </td>
                        

                        <td>
                          <div class="managecoursebtnmain">
                            <button type="button" class="managecoursebtn1" >
                              Delete
                            </button>
                            <button type="button" class="managecoursebtn2" >
                              Edit
                            </button>
                             </div>
                        </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <i class="bx bxl-vuejs bx-sm text-success me-3"></i>
                          <span class="fw-medium">VueJs Project</span>
                        </td>
                        

                        <td>
                          <div class="managecoursebtnmain">
                            <button type="button" class="managecoursebtn1" >
                              Delete
                            </button>
                            <button type="button" class="managecoursebtn2" >
                              Edit
                            </button>
                             </div>
                        </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <i class="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                          <span class="fw-medium">Bootstrap Project</span>
                        </td>

                        <td>
                          <div class="managecoursebtnmain">
                            <button type="button" class="managecoursebtn1" >
                              Delete
                            </button>
                            <button type="button" class="managecoursebtn2" >
                              Edit
                            </button>
                             </div>
                        </td>
                                                
                      </tr>

                      <tr>
                        <td>
                          <i class="bx bxl-angular bx-sm text-danger me-3"></i>
                          <span class="fw-medium">Angular Project</span>
                        </td>
                        
                        <td>
                          <div class="managecoursebtnmain">
                            <button type="button" class="managecoursebtn1" >
                              Delete
                            </button>
                            <button type="button" class="managecoursebtn2" >
                              Edit
                            </button>
                             </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <i class="bx bxl-react bx-sm text-info me-3"></i> <span class="fw-medium">React Project</span>
                        </td>
                        

                        <td>
                          <div class="managecoursebtnmain">
                            <button type="button" class="managecoursebtn1" >
                              Delete
                            </button>
                            <button type="button" class="managecoursebtn2" >
                              Edit
                            </button>
                             </div>
                        </td>
                        
                      </tr>

                      <tr>
                        <td>
                          <i class="bx bxl-angular bx-sm text-danger me-3"></i>
                          <span class="fw-medium">Angular Project</span>
                        </td>
                        
                        <td>
                          <div class="managecoursebtnmain">
                            <button type="button" class="managecoursebtn1" >
                              Delete
                            </button>
                            <button type="button" class="managecoursebtn2" >
                              Edit
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

export default ManageCourses