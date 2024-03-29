import React from 'react'
import CompanySidebar from '../components/CompanySidebar'
import '../css/AddCourses.css'

function AddCourses() {
  return (
    <div >
      <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container ">
                    <CompanySidebar/>

                <div className="course-content-body">
                    <h1 className='text-one add-quiz'>Add Courses</h1>

                                <div class="card-content main-con">
                                    <div class="card-body-exe">
                               
                                    <form>

                                        <div class="text-feild">
                                                <label class="form-label" for="basic-default-Question">Course Title</label>
                                                <input type="text" class="form-control" id="basic-default-ans1"  />
                                        </div>
                                        <div class="text-field">
                                            <label class="form-label" for="basic-default-Question">Question</label>
                                            <textarea class="form-control zz" id="basic-default-Question" rows="10" ></textarea>
                                        </div>
                                        

                                        <button type="button" class="btn rounded-pill btn-outline-success">ADD</button>
                                        
                                    </form>


               
                                    </div>
                    </div>

              
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourses