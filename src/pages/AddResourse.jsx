import React from 'react'
import MentorSidebar from '../components/MentorSidebar'
import '../css/AddResourses.css'

export default function AddResourse() {
  return (
    <div class="d-inline-flex p-2 bd-highlight">
        
    <MentorSidebar />

    
  <div className="text-one coursetitle df"> Add Resourses </div>

  <br></br>

      
         <div class="card-content main-con1">
                            <div class="card-body-exe">
                               
                                    <form>
                                       
                                        
                                       
                                        <div class="text-feild">
                                                <label class="form-label" for="basic-default-name">Name</label>
                                                <input type="text" class="form-control" id="basic-default-name"  />
                                        </div>
                                        <div class="text-feild">
                                                <label class="form-label" for="basic-default-Link">Link</label>
                                                <input type="text" class="form-control" id="basic-default-Link"  />
                                        </div>

                                        <button type="button" class="btn rounded-pill btn-outline-success">Add</button>
                                        
                                    </form>


                            </div>
         </div>


</div>
  )
}
