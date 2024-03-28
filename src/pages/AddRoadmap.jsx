import React from 'react'
import MentorSidebar from '../components/MentorSidebar';
import '../css/AddRoadmap.css'
export default function AddRoadmap() {
  return (
    <div>
       <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container roadmap">
                    <MentorSidebar/>

                <div className="roadmap-content-body">
                    <h1 className='text-one add-roadmap'>Add Roadmap</h1>

                                <div class="card-content main-roadmap">
                                    <div class="card-body-roadmap">
                               
                                    <form className='roadmap-form'>
                                    <div class="text-field-roadmap">
                                    <label class="form-label" for="photo-upload">Upload Photo:</label>
                                    <input type="file" class="form-control" id="photo-upload" accept="image/*" />
                                    </div>
                                        <div class="text-field-roadmap">
                                                <label class="form-label" for="basic-default-Question">Roadmap Name :</label>
                                                <input type="text" class="form-control" id="basic-default-ans1"  />
                                        </div>
                                        <div class="text-field-roadmap">
                                                <label class="form-label" for="basic-default-Question">Description :</label>
                                                <textarea class="form-control" id="basic-default-Question" rows="4"></textarea>
                                        </div>
                                        <div class="text-field-roadmap">
                                                <label class="form-label" for="basic-default-Question">Mentor Name :</label>
                                                <input type="text" class="form-control" id="basic-default-ans3"  />
                                        </div>

                                        <button type="button" class="btn-roadmap "><a href='/manageRoadmaps'>ADD</a></button>
                                        
                                    </form>


               
                                    </div>
                    </div>

              
                </div>
            </div>
        </div> 
             
    </div>
  )
}

