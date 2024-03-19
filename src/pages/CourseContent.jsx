import React from 'react'
import '../pages/CourseContent.css'
import { Link } from 'react-router-dom';

export default function CourseContent() {
  return (
    <div>

     <>

  <title>
    Course Containt Page
  </title>

  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo">
          <span className="app-brand-text demo menu-text fw-bold ms-2">
              Java Basics
          </span>
        </div>

        <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
          
         <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Java Introduction</div>
            </a>
           
          </li>

          <li className="menu-item ">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Java Output</div>
            </a>
           
          </li>

          <li className="menu-item ">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Java Comments</div>
            </a>
           
          </li>

          <li className="menu-item active open">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              
              <div data-i18n="Layouts">Java Variables</div>
            </a>
           
          </li>

         <div className='certificatebtn'>
            <a href="#" target="_blank" class="btn rounded-pill btn-outline-success">Claim Certificate</a>
         </div>
         <div className="internshipReqBtn">
      <Link to="/internshipreq" className="btn btn-dark">Internship Request</Link>
    </div>
       
      
    </ul>
  </aside>
 

      <div className="layout-page">
        
        <h1 className='topic'>Java Variables</h1>
        <h3 className='subtopic'>Variables are containers for storing data values.</h3>
     
        <h5 className='subtopic'>In Java, there are different types of variables, for example:</h5>
       
       <ul className='ulList'>
                <li>String - stores text, such as "Hello". String values are surrounded by double quotes</li>
                <li>int - stores integers (whole numbers), without decimals, such as 123 or -123</li>
                <li>float - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
                <li>char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
                <li>boolean - stores values with two states: true or false</li>
        </ul>
        <form>
        <div class="card">
        
          <div class="card-body">
            <h5 class="card-title">Examples</h5>
              <p class="card-text"><b>Create a variable called name of type String and assign it the value "John":</b></p>
               <p>String name = "John";<br />
               System.out.println(name);</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Test Yourself With Exercises </h5>
              <p class="card-text">Create a variable named carName and assign the value Volvo to it.</p>
              
               <div className="answer1">
               <input type="text"id="ans1"class="form-control" />
               <input type="text"id="ans2"class="form-control" />  =  
               <input type="text"id="ans3"class="form-control" /> 
               </div>
               <button type="button" class="btn btn-info">Submit</button>
               
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
