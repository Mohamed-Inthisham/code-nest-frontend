import React from 'react'
import MentorSidebar from '../components/MentorSidebar'
import '../css/ViewRoadmap.css'
import javaRoadMap from '../images/javaRoadMap.png'
import netRoadmap from '../images/netRoadmap1.png'


function ViewRoadmap() {
  return (
    <div class="d-inline-flex p-2 bd-highlight">
        
        <MentorSidebar />

        
      <div className="text-one coursetitle"> View Roadmap </div>

      <br></br>

            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 viewroadmapcards">
                  <div className="colv">
                    <div className="card cardv">
                      <img className="card-img-top topv" src={javaRoadMap} alt="Card image cap" />
                      <div className="card-body">
                        <h3 className="card-title">JAVA</h3>
                        <h6 className="card-title"> From basics to advanced concepts, covering OOP, data structures, frameworks, and application development for mastering Java programming.</h6>
                        <h6 className="card-title">Mentor: K.L Santhush</h6>
                        
                      </div>
                    </div>
                  </div>
                  
                  <div className="colv">
                    <div className="card cardv">
                      <img className="card-img-top topv" src={netRoadmap} alt="Card image cap" />
                      <div className="card-body">
                        <h3 className="card-title">.NET</h3>
                        <h6 className="card-title">From basics to advanced concepts, covering frameworks like ASP.NET, WinForms, and Xamarin for versatile application development.</h6>
                        <h6 className="card-title">Mentor: A.H Divya</h6>
                        
                      </div>
                    </div>

                    {/* <div className="colv">
                    <div className="card cardv">
                      <img className="card-img-top topv" src={netRoadmap} alt="Card image cap" />
                      <div className="card-body">
                        <h3 className="card-title">JAVA</h3>
                        <h6 className="card-title"> From basics to advanced concepts, covering OOP, data structures, frameworks, and application development for mastering Java programming.</h6>
                        <h6 className="card-title">Mentor: K.L Santhush</h6>
                        
                      </div>
                    </div>
                  </div>

                  <div className="colv">
                    <div className="card cardv">
                      <img className="card-img-top topv" src={netRoadmap} alt="Card image cap" />
                      <div className="card-body">
                        <h3 className="card-title">JAVA</h3>
                        <h6 className="card-title"> From basics to advanced concepts, covering OOP, data structures, frameworks, and application development for mastering Java programming.</h6>
                        <h6 className="card-title">Mentor: K.L Santhush</h6>
                        
                      </div>
                    </div>
                  </div> */}
                    
                  </div>

                  

                  
            </div>



    </div>
  )
}

export default ViewRoadmap