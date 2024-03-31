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
        
        <h1 className='topic'>Java Script Basics</h1>
        <h3 className='subtopic'>Variables are containers for storing data values.</h3>
     
        <h5 className='subtopic'>In Java Script, there are different types of variables, for example:</h5>
       
       <ul className='ulList'>
                <li>String - stores text, such as "Hello". String values are surrounded by double quotes</li>
                <li>int - stores integers (whole numbers), without decimals, such as 123 or -123</li>
                <li>float - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
                <li>char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
                <li>boolean - stores values with two states: true or false</li>
        </ul>
    <form>
        <div class="card-content">
        
          <div class="card-body-in">
            <h5 class="card-title1">Examples</h5>
              <p class="card-text"><b>Create a variable called name of type String and assign it the value "John":</b></p>
               <p>String name = "John";<br />
               System.out.println(name);</p>
               <button type="button" id="try-it-self-btn1" class="btn btn-success"> <a href="/editor">Try it Your Self</a></button>
          </div>
        </div>

        <div class="card-content">
        
          <div class="card-body1">
            <h5 class="card-title1">Examples</h5>
              <p class="card-text"><b>Create a variable called myNum of type int and assign it the value 15:</b></p>
               <p>int myNum = 15;<br />
               System.out.println(myNum);</p>
               <button type="button" id="try-it-self-btn2" class="btn btn-success"><a href="/editor">Try it Your Self</a></button>
          </div>
        </div>

        <div class="card-content">
        
        <div class="card-body1">
          <h5 class="card-title1">Examples</h5>
            <p class="card-text"><b>You can also declare a variable without assigning the value, and assign the value later:</b></p>
             <p>int myNum;<br />
             myNum = 15;<br />
             System.out.println(myNum);</p>
             <button type="button" id="try-it-self-btn3" class="btn btn-success"><a href="/editor">Try it Your Self</a></button>
        </div>
      </div>
      
        <div class="card-content">
        <h5 id="topic-exe">Test Yourself With Exercises </h5>
          <div class="card-body-exe">
              <p class="card-text">1.Create a variable named carName and assign the value Volvo to it.</p>
                <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">String car ="Volvo";</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio1">String Volvo= "car";</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                    <label class="form-check-label" for="inlineRadio1">"Volvo" car = String;</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
                    <label class="form-check-label" for="inlineRadio1">car String = "Volvo";</label>
                  </div> 

               <button type="button" id="btnn" class="btn btn-info">Submit</button>
               
               
          </div>
        </div>

        <div class="card-content">
          <div class="card-body-exe">
            
              <p class="card-text">2.Create a variable named maxSpeed and assign the value 120 to it.</p>
                <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">120 =Int maxSpeed;</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio1">Int maxSpeed=120;</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="option3"/>
                    <label class="form-check-label" for="inlineRadio1">maxSpeed Int = 120</label>
                  </div> 

                  <div className="answer1">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio4" value="option4"/>
                    <label class="form-check-label" for="inlineRadio1">maxSpeed 120 = Int</label>
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
