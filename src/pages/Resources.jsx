import React from 'react'
import '../css/Mentoring.css'
import {Link} from 'react-router-dom'

function Resources() {
  return (
    <div>

         <div className="demo-inline-spacing bn-main">
            <button type="button" className="btn btn- bn-mentoring" > <Link to ="/mentoring"><h6 className='bn-word'>Roadmap</h6></Link></button>
            <button type="button" className="btn btn-secondary bn-mentoring-main"><Link to ="/resources"><h6 className='bn-word-main'>Resources</h6></Link></button>
            <button type="button" className="btn btn- bn-mentoring"><Link to ="/discuss"><h6 className='bn-word'>Discuss</h6></Link></button>
          </div>

          <div className="reff-course">
            
                <div className="demo-inline-spacing mt-3">
                  <div className="list-group">
                    <a href="javascript:void(0);" className="list-group-item list-group-item- flex-column align-items-start reff-courses-main">
                      <div className="reff-courses">
                        <h4 className='reff-courses-heading'>Referenced Videos</h4>
                      </div>
                    </a>

                    <a href="javascript:void(0);" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex justify-content-between w-100">
                        <h5>Java for beginners</h5>
                        <small className="text-muted">Few minutes ago</small>
                      </div>
                      <p className="mb-1">https://youtu.be/eIrMbAQSU34?si=C5r96UjXS_8GuK2Y</p>
                    </a>

                    <a href="javascript:void(0);" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex justify-content-between w-100">
                        <h5>Java Classes and objects</h5>
                        <small className="text-muted">1 day ago</small>
                      </div>
                      <p className="mb-1">https://youtu.be/IUqKuGNasdM?si=wyEP8e48yFAZA1bZ</p>
                    </a>

                    <a href="javascript:void(0);" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex justify-content-between w-100">
                        <h5>OOP Concept</h5>
                        <small className="text-muted">1 day ago</small>
                      </div>
                      <p className="mb-1">https://youtu.be/1ONhXmQuWP8?si=uM0q10Ki_x9pNrG4</p>
                    </a>

                    <a href="javascript:void(0);" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex justify-content-between w-100">
                        <h5>Sql Tutorials</h5>
                        <small className="text-muted">3 days ago</small>
                      </div>
                      <p className="mb-1">https://youtu.be/Ur3q2ruqkC4?si=2kIvt2X2fdbXzLNe</p>
                    </a>

                    <a href="javascript:void(0);" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex justify-content-between w-100">
                        <h5>Phython</h5>
                        <small className="text-muted">4 days ago</small>
                      </div>
                      <p className="mb-1">https://youtu.be/kqtD5dpn9C8?si=xROOl7V-NrPWlE1K</p>
                    </a>

                  </div>
                </div>    
          </div>




          <div className="reff-course">
            
                <div className="demo-inline-spacing mt-3">
                  <div className="list-group">
                    <a href="javascript:void(0);" className="list-group-item list-group-item- flex-column align-items-start reff-courses-main">
                      <div className="reff-courses">
                        <h4 className='reff-courses-heading'>Referenced Courses</h4>
                      </div>
                    </a>

                    <a href="javascript:void(0);" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex justify-content-between w-100">
                        <h5>CSS for beginners</h5>
                        <small className="text-muted">1 day ago</small>
                      </div>
                      <p className="mb-1">https://www.w3schools.com/css/</p>
                    </a>

                    <a href="javascript:void(0);" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex justify-content-between w-100">
                        <h5>Phython projects</h5>
                        <small className="text-muted">2 days ago</small>
                      </div>
                      <p className="mb-1">https://bootcamp.cvn.columbia.edu/blog/python-projects-for-beginners-to-gain-skills/</p>
                    </a>

                    <a href="javascript:void(0);" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex justify-content-between w-100">
                        <h5>Programming Fundermentals</h5>
                        <small className="text-muted">3 days ago</small>
                      </div>
                      <p className="mb-1">https://learn.saylor.org/course/index.php?categoryid=9&gad_source=1&gclid=CjwKCAjw7-SvBhB6EiwAwYdCAdKVYsT9dqQcfAq9j0EBMksCyjJFsYcgmQw35Rv8oohzKuMOSvTcBxoCrAgQAvD_BwE</p>
                    </a>

                    <a href="javascript:void(0);" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex justify-content-between w-100">
                        <h5>HTML, CSS, JS projects</h5>
                        <small className="text-muted">5 days ago</small>
                      </div>
                      <p className="mb-1">https://codewithcurious.com/web-developement-projects/</p>
                    </a>

                    <a href="javascript:void(0);" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex justify-content-between w-100">
                        <h5>Database Introduction</h5>
                        <small className="text-muted">6 days ago</small>
                      </div>
                      <p className="mb-1">https://www.digitalocean.com/community/conceptual-articles/an-introduction-to-databases</p>
                    </a>

                  </div>
                </div>    
          </div>

    </div>
  )
}

export default Resources