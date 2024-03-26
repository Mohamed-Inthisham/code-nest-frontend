import React from 'react'
import CompanySidebar from '../components/CompanySidebar'

export default function EditQuiz() {
  return (
    <div>

<div className="layout-wrapper layout-content-navbar">
            <div className="layout-container ">
                    <CompanySidebar/>

                <div className="course-content-body">
                    <h1 className='text-one add-quiz'>Update Quiz</h1>

                                <div class="card-content main-con">
                                    <div class="card-body-exe">
                               
                                    <form>
                                        <div class="text-field">
                                            <label class="form-label" for="basic-default-Question">Question</label>
                                            <textarea class="form-control" id="basic-default-Question" rows="4"></textarea>
                                        </div>
                                        <div class="text-feild">
                                                <label class="form-label" for="basic-default-Question">Answer 1</label>
                                                <input type="text" class="form-control" id="basic-default-ans1"  />
                                        </div>
                                        <div class="text-feild">
                                                <label class="form-label" for="basic-default-Question">Answer 2</label>
                                                <input type="text" class="form-control" id="basic-default-ans2"  />
                                        </div>
                                        <div class="text-feild">
                                                <label class="form-label" for="basic-default-Question">Answer 3</label>
                                                <input type="text" class="form-control" id="basic-default-ans3"  />
                                        </div>
                                        <div class="text-feild">
                                                <label class="form-label" for="basic-default-Question">Answer 4</label>
                                                <input type="text" class="form-control" id="basic-default-ans4"  />
                                        </div>

                                        <button type="button" class="btn rounded-pill btn-outline-success">Update</button>
                                        
                                    </form>



                                
               
               
                                     </div>
                                </div>

              
                </div>
            </div>
        </div> 

    </div>
  )
}
