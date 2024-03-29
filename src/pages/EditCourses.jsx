import React from 'react'
import CompanySidebar from '../components/CompanySidebar'

function EditCourses() {
  return (
    <div >
      <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container ">
              <CompanySidebar/>
              

              <div>
                  <h1 className='text-one coursetitle'>Edit Courses</h1>

                      <div className='row'>
                          <div className='col-md-4'>
                            <div className="addacard">
                              <div className="card ">
                                <div className="card-body">
                                  <h5 className="card-title">Java Intermediate</h5>
                                  <p className="card-text">
                                    <p>1. Introduction to HTML</p>
                                    <p>2. HTML Syntax and Tags</p>
                                    <p>3. Text Formatting</p>
                                    <p>4. Lists and Links</p>
                                    <p>5. Images and Multimedia</p>
                                    <p>6. HTML Attributes</p>
                                    <p>7. Semantic HTML</p>
                                    <p>8. Building Your First Web Page</p>
                                    <p>9. Best Practices and Further Learning</p>
                                  </p>
                                  <a href="javascript:void(0)" className="btn btn-primary">Add More</a>
                                </div>
                              </div>
                            </div>
                      </div>

                      <div className='col-md-4'>
                        <div className="addacard">
                          <div className="card mb-3">
                            <div className="card-body">
                              <h5 className="card-title">Introduction to CSS</h5>
                              <p className="card-text">
                                <p>1. Getting Started with CSS </p>
                                <p>2. Selectors and Properties</p>
                                <p>3. Layout and Positioning</p>
                                <p>4. Advanced CSS Techniques</p>
                                <p>.. Final Project</p>
                                <p>.. Assessment</p>
                                <p>.. Resources</p>
                                <p>.. Prerequisites</p>
                               </p>
                              <a href="javascript:void(0)" className="btn btn-primary">Add More</a>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className='col-md-4'>
                        <div className="addacard">
                          <div className="card mb-3">
                            <div className="card-body">
                              <h5 className="card-title">Java Intermediate</h5>
                              <p className="card-text">
                                <p>1. Review of Basics </p>
                                <p>2. Exception Handling</p>
                                <p>3. Collections Framework</p>
                                <p>4. Generics</p>
                                <p>5. File I/O</p>
                                <p>6. Multithreading</p>
                                <p>7. Java 8 Features</p>
                                <p>8. Networking and Sockets</p>
                                <p>9. JDBC (Java Database Connectivity)</p>
                                <p>10. GUI Programming with Swing</p>
                                <p>11. Design Patterns (Overview)</p>
                                <p>12. Advanced Topics (Optional)</p>
                              </p>
                              <a href="javascript:void(0)" className="btn btn-primary">Add More</a>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                      
              </div>
            </div>
      </div>
    </div>
  )
}

export default EditCourses