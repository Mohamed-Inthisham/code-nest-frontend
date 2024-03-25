import React from 'react'
import MentorSidebar from '../components/MentorSidebar'
import '../css/ManageResourses.css'

export default function ManageResourses() {
  return (
    <div class="d-inline-flex p-2 bd-highlight">
        
    <MentorSidebar />

    
  <div className="text-one coursetitle"> Manage Resourses </div>
  
  

  <br></br>
  
                 

        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 viewroadmapcards">
              <div className="colv">

              <div class="card mainA">
                <div className='topic-btn'>
                <h5 class="card-header">Referenced Videos</h5>
                <div><button type="button" class="btn btn-primary btn2"><a className='courseStyle' href='/addResourse'>Add Video Link</a></button></div>
                </div>
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr>
                        <td>
                          <span class="fw-medium">Java for Beginners</span>
                        </td>
                        <td>https://youtu.be/eIrMbAQSU34?si=C5r96UjXS_8GuK2Y</td>
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                         <span class="fw-medium">Java Classes and Objects</span>
                        </td>
                        <td>https://youtu.be/IUqKuGNasdM?si=wyEP8e48yFAZA1bZ</td>
                        
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <span class="fw-medium">OOP Concepts</span>
                        </td>
                        <td>https://youtu.be/1ONhXmQuWP8?si=uM0q10Ki_x9pNrG4</td>
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span class="fw-medium">SQL Tutorials</span>
                        </td>
                        <td>https://youtu.be/Ur3q2ruqkC4?si=2kIvt2X2fdbXzLNe</td>
                       
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
                
              </div>
              <div class="card mainB">
              <div className='topic-btn'>
                <h5 class="card-header">Referenced Courses</h5>
                <div><button type="button" class="btn btn-primary btn2"><a className='courseStyle' href='#'>Add Course Link</a></button></div>
                </div>
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr>
                        <td>
                          <span class="fw-medium">CSS For Beginners</span>
                        </td>
                        <td>https://www.w3schools.com/css/</td>
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                         <span class="fw-medium">Python Projects</span>
                        </td>
                        <td>https://bootcamp.cvn.columbia.edu/blog/python-projects-for-beginners-to-gain-skills/</td>
                        
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <span class="fw-medium">Programming Fundermentals</span>
                        </td>
                        <td>https://learn.saylor.org/course/index.php?categoryid=9&gad_source=1&gclid=CjwKCAjw7-<br/>SvBhB6EiwAwYdCAdKVYsT9dqQcfAq9j0EBMksCyjJF<br/>sYcgmQw35Rv8oohzKuMOSvTcBxoCrAgQAvD_BwE</td>
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span class="fw-medium">HTML, CSS, JS projects</span>
                        </td>
                        <td>https://codewithcurious.com/web-developement-projects/</td>
                       
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-2"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-2"></i> Delete</a>
                            </div>
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
