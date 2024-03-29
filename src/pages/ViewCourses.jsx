import React from 'react'
import CompanySidebar from '../components/CompanySidebar'
import '../css/ViewCourses.css'
import image1 from '../images/myLearning1.png'
import image2 from '../images/myLearning2.png'
import image3 from '../images/myLearning3.jpeg'
import image4 from '../images/myLearning4.png'
import image5 from '../images/myLearning5.png'
import image6 from '../images/myLearning6.png'


function ViewCourses() {
  return (
    <div class="d-inline-flex p-2 bd-highlight">
        
        <CompanySidebar />

        
        <h1 className='text-one coursetitle'>View Courses</h1>

      <br></br>

            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 viewcards">
                  <div className="col">
                    <div className="card h-70">
                      <img className="card-img-top" src={image5} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to C</h5>
                        
                      </div>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="card h-70">
                      <img className="card-img-top" src={image5} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to C</h5>
                        
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-70">
                      <img className="card-img-top" src={image5} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to C</h5>
                        
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-70">
                      <img className="card-img-top" src={image5} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to C</h5>
                        
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-70">
                      <img className="card-img-top" src={image5} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to C</h5>
                        
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-70">
                      <img className="card-img-top" src={image5} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to C</h5>
                        
                      </div>
                    </div>
                  </div>

                  
            </div>



    </div>
  )
}

export default ViewCourses