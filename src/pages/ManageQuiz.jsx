import React from 'react'
import { Link } from 'react-router-dom';
import CompanySidebar from '../components/CompanySidebar';
import '../css/ManageQuiz.css'

export default function ManageQuiz() {
  return (
    
    <div>
       <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container ">
              <CompanySidebar/>
              <div className="course-content-body">
                   <div className="topic-btn-combination">

                   <h1 className='text-one'>Manage Quizzes</h1>
                   
                   <button type="button" class="btn btn-primary btn1"><a className='add-btn' href='/addQuiz'>Add Quiz</a></button>
                   </div>
                   

                   <div class="card-content main">
                            <div class="card-body-exe">
                                <p class="card-text">1.Create a variable named carName and assign the value Volvo to it.</p>
                                    <div className="answer1">
                                      
                                        <label class="form-check-label" for="inlineRadio1">i. String car ="Volvo";</label>
                                    </div> 

                                <div className="answer1">
                                   
                                    <label class="form-check-label" for="inlineRadio1">ii. String Volvo= "car";</label>
                                </div> 

                                <div className="answer1">
                                    
                                    <label class="form-check-label" for="inlineRadio1">iii. "Volvo" car = String;</label>
                                </div> 
                                <div className="answer1">
                                    
                                    <label class="form-check-label" for="inlineRadio1">iv. car "Volvo"= String;</label>
                                </div> 

                                <button type="button" class="btn btn-info btn-edit"><a className='edit-btn' href='/editquiz'>Edit</a></button>
                                <button type="button" class="btn btn-danger">Delete</button>
               
               
                            </div>
                    </div>


                    <div class="card-content main">
                    <div class="card-body-exe">
            
                            <p class="card-text">2.Create a variable named maxSpeed and assign the value 120 to it.</p>
                                <div className="answer1">
                                
                                    <label class="form-check-label" for="inlineRadio1">i. 120 =Int maxSpeed;</label>
                                </div> 

                                <div className="answer1">
                                    
                                    <label class="form-check-label" for="inlineRadio1">ii. Int maxSpeed=120;</label>
                                </div> 

                                <div className="answer1">
                                   
                                    <label class="form-check-label" for="inlineRadio1">iii. maxSpeed Int = 120</label>
                                </div> 

                                <div className="answer1">
                                   
                                    <label class="form-check-label" for="inlineRadio1">iv. maxSpeed 120 = Int</label>
                                </div> 

                                <button type="button" class="btn btn-info btn-edit">Edit</button>
                                <button type="button" class="btn btn-danger">Delete</button>

               
                    </div>
                </div>
                   
              </div>
            </div>
       </div>
    </div>

  )
}
