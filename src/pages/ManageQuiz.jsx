import React from 'react'
import { Link } from 'react-router-dom';
import CompanySidebar from '../components/CompanySidebar';
import '../css/ManageQuiz.css'
import image5 from '../images/myLearning5.png'
import image3 from '../images/myLearning2.png'

export default function ManageQuiz() {
  return (
    
   <div>
     <div class="d-inline-flex p-2 bd-highlight">
        
        <CompanySidebar />

        
      <div className="text-one coursetitle"> Manage Quizzes </div>

      <br></br>

            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 viewcards">
                  <div className="col">
                    <div className="card h-70">
                      <img className="card-img-top" src='/static/media/course2.92ae8aec8fdec2bd9645.png' alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to Java</h5>
                        <button type="button" class="btn btn-info btn-edit"><a className='edit-btn' href='/editquizhome'>Go to Quizzes </a></button>
                        
                      </div>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="card h-70">
                      <img className="card-img-top" src={image5} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to C</h5>
                        <button type="button" class="btn btn-info btn-edit"><a className='edit-btn' href='#'>Go to Quizzes </a></button>
                        
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-70">
                      <img className="card-img-top" src={image3} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to C</h5>
                        <button type="button" class="btn btn-info btn-edit"><a className='edit-btn' href='#'>Go to Quizzes </a></button>
                        
                      </div>
                    </div>
                  </div>

                  

                

                

                  
            </div>



    </div>


   </div>

  )
}
