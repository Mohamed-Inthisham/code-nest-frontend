import React from 'react'
import '../css/CourseContent.css'
import { Link } from 'react-router-dom';

export default function CourseContent() {
  return (
    <div>

     <>

  <title>
    Course Containt Page
  </title>

  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container ">
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo">
          <span className="app-brand-text demo menu-text fw-bold ms-2">
              Java Script
          </span>
        </div>

        <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
          
         <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts"> Java Script Introduction</div>
            </a>
           
          </li>

          <li className="menu-item ">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Java Script Output</div>
            </a>
           
          </li>

          <li className="menu-item ">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Java Script Comments</div>
            </a>
           
          </li>

          <li className="menu-item active open">
            <a href="/CourseContent" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts" className='cursor-pointer'>Java Script Variables</div>
            </a>
           
          </li>

         <div className='certificatebtn'>
            <a href="#" target="_blank" class="btn rounded-pill btn-outline-success">Claim Certificate</a>
         </div>
         <div className="internshipReqBtn">
      <Link to="/internshipReqForm" className="btn btn-dark">Internship Request</Link>
    </div>
       
      
    </ul>
  </aside>
 

  <div className="course-content-body">
        
       
    <form>
        <div class="card-content">
        <h1 className='topic'>Java Script Basics</h1>
        <h3 className='subtopic'>Declaring a JavaScript Variable</h3>
     
        <h5 className='subtopic'>You declare a JavaScript variable with the var or the let keyword:</h5>
       
       <ul className='ulList'>
                <li>The var keyword was used in all JavaScript code from 1995 to 2015.</li>
                <li>The let and const keywords were added to JavaScript in 2015.</li>
                <li>The var keyword should only be used in code written for older browsers.</li>
             
        </ul>
        
          <div className='example1'>
            
              <p class="card-text"><b>Example using let</b></p>
               <p>let carName = "Volvo";<br />
                   document.getElementById("demo").innerHTML = carName;</p>
               
              <p class="card-text"><b>Example using const</b></p>
               <p>const x = 5;<br />
               const y = 6;<br />
               const z = x + y;</p>
              

              <p class="card-text"><b>Mixed Example</b></p>
               <p>const price1 = 5;<br />
               const price2 = 6;<br />
               let total = price1 + price2;</p>

             <button type='button' className='btn btn-primary'><a className='btn-color' href="/editor">Try it Your Self</a></button>
           </div>
             
              
          
   </div>

       
      
        <div class="card-content">
        <h5 id="topic-exe">Test Yourself With Exercises </h5>
       
          <div class="card-body-exe">
              <p class="card-text">1.Create a variable called carName and assign the value Volvo to it.</p>
                <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">carName let = "Volvo";</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio1">let carName = "Volvo";</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                    <label class="form-check-label" for="inlineRadio1">"Volvo"=let carName;</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
                    <label class="form-check-label" for="inlineRadio1">carName = "Volvo";</label>
                  </div> 

               <button type="button" id="btnn" class="btn btn-info">Submit</button>
               
               
          </div>
        </div>

        <div class="card-content">
          <div class="card-body-exe">
            
              <p class="card-text">2.Create a variable called y, assign the value 100 to it.</p>
                <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">100=let y </label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio1">ylet = 100</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="option3"/>
                    <label class="form-check-label" for="inlineRadio1">y = 100 let</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio4" value="option4"/>
                    <label class="form-check-label" for="inlineRadio1">let y= 100</label>
                  </div> 

               <button type="button" id="btnn" class="btn btn-info">Submit</button>
               
               
          </div>
        </div>

        <div class="card-content">
          <div class="card-body-exe">
            
              <p class="card-text">3.Create a variable called x, assign the value 50 to it.</p>
                <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">50=let x </label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio1">x let = 50</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="option3"/>
                    <label class="form-check-label" for="inlineRadio1">x = 50 let</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio4" value="option4"/>
                    <label class="form-check-label" for="inlineRadio1">let x = 50</label>
                  </div> 

               <button type="button" id="btnn" class="btn btn-info">Submit</button>
               
               
          </div>
        </div>


        <div class="card-content">
          <div class="card-body-exe">
            
              <p class="card-text">4.Create a variable called x, assign the value 10 to it.</p>
                <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">10=let x </label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio1">x let = 10</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="option3"/>
                    <label class="form-check-label" for="inlineRadio1">x = 10 let</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio4" value="option4"/>
                    <label class="form-check-label" for="inlineRadio1">let x = 10</label>
                  </div> 

               <button type="button" id="btnn" class="btn btn-info">Submit</button>
               
               
          </div>
        </div>
   

    </form>
        
        
      </div>
      
    </div>
    
    
  </div>
  
  
  
  </>


</div>
  )
}
