import React from 'react'
import '../css/Mentoring.css'
import {Link} from 'react-router-dom'
import image1 from '../images/roadmap1.png'
import image2 from '../images/roadmap2.png'
import image3 from '../images/roadmap3.png'
import image4 from '../images/roadmap4.jpeg'

function Mentoring() {
  return (
    <div>
          <div className="demo-inline-spacing bn-main">
            <button type="button" className="btn btn-secondary bn-mentoring-main"> <Link to ="/mentoring"><h6 className='bn-word-main'>Roadmap</h6></Link></button>
            <button type="button" className="btn btn- bn-mentoring"><Link to ="/resources"><h6 className='bn-word'>Resources</h6></Link></button>
            <button type="button" className="btn btn- bn-mentoring" disabled=""><Link to ="/discuss"><h6 className='bn-word'>Discuss</h6></Link></button>
          </div>

          <div classname="roadmap-one">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img className="card-img card-img-left smaller-image1" src={image1} alt="Card image"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title card-title-adjust">Java Operators</h5>
                      <p className="card-text card-content-adjust"> 
                      Beginning with the foundational arithmetic operators (+, -, *, /), developers learn how to perform basic mathematical operations and handle 
                      numeric data. Advancing from these basics, the roadmap introduces assignment operators like += and -=, providing shortcuts 
                      for updating variable values. Bitwise operators (&, |, ^) open up a new realm of bitwise manipulation, enabling developers 
                      to work at the binary level for tasks such as data encryption or efficient memory allocation. Logical operators (&&, ||, !) 
                      become crucial for creating conditional statements and controlling program flow based on conditions. Additionally, Java's rich set 
                      of comparison operators  facilitate precise comparisons between variables and values, essential for 
                      decision-making in applications. Delving into operator precedence and associativity ensures developers can construct complex 
                      expressions with clarity and accuracy. Finally, the roadmap includes the ternary operator (?:), a concise way to express simple 
                      conditional logic. Overall, the Java operators roadmap equips developers with a diverse toolkit to manipulate data, control flow, 
                      and create efficient, expressive Java programs.
                      </p>
                      <p className='content-creator-name'> M.M.Fernando</p>
                    </div>
                  </div>
                </div>

                <hr />
                
                <div className="row g-0">
                  <div className="col-md-4">
                  <img className="card-img card-img-left smaller-image1" src={image2} alt="Card image"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title card-title-adjust">Frontend developer</h5>
                      <p className="card-text card-content-adjust">
                      In summary, the Frontend Developer roadmap is a guide for developers to navigate the evolving landscape of web 
                      technologies. It begins with mastering the core trio of HTML, CSS, and JavaScript, essential for structuring 
                      content, styling, and adding interactivity to web pages. Developers then progress to responsive web design using 
                      frameworks like Bootstrap or Tailwind CSS.

                      The roadmap includes learning front-end libraries and frameworks such as React, Angular, or Vue.js, enabling the 
                      creation of dynamic and interactive single-page applications (SPAs). Advanced CSS features like Flexbox and Grid, 
                      along with preprocessors like Sass or Less, enhance layout and styling capabilities.

                      Asynchronous programming with JavaScript, using Promises and Async/Await, becomes a key skill for managing 
                      non-blocking operations. Developers also explore browser Developer Tools for debugging and optimizing their applications, 
                      and APIs (such as REST or GraphQL) for fetching data.
                      </p>
                      <p className='content-creator-name'> B.P.A.Nora</p>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="row g-0">
                  <div className="col-md-4">
                    <img className="card-img card-img-left smaller-image1" src={image3} alt="Card image"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title card-title-adjust">Java script roadmap</h5>
                      <p className="card-text card-content-adjust">
                      The JavaScript roadmap outlines a progressive journey for developers starting from the basics and expanding into 
                      advanced concepts. Beginners typically begin by grasping the fundamentals: variables, data types, and operators. 
                      As they advance, they delve into functions, arrays, and objects, learning to manipulate data structures effectively. 
                      Understanding control flow and loops becomes crucial for writing efficient code. Next, developers often explore DOM 
                      manipulation for web development, enabling them to create dynamic and interactive web pages. As they progress, 
                      learning about asynchronous JavaScript and APIs opens doors to creating responsive and data-driven applications. 
                      Advanced topics such as ES6+ features, modules, and tools like Webpack and Babel further enhance their skill set. 
                      Additionally, exploring frameworks and libraries like React, Angular, or Vue.js can deepen their understanding of 
                      building complex web applications. Ultimately, the JavaScript roadmap is a dynamic journey where developers continuously 
                      learn, adapt, and apply their knowledge to create impactful and innovative solutions
                      </p>
                      <p className='content-creator-name'> N.Y.Perera</p>
                    </div>
                  </div>
                </div>

                <hr />


                <div className="row g-0">
                  <div className="col-md-4">
                    <img className="card-img card-img-left smaller-image1" src={image4} alt="Card image"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title card-title-adjust">CSS Roadmap</h5>
                      <p className="card-text card-content-adjust">
                      The JavaScript roadmap outlines a progressive journey for developers starting from the basics and expanding into 
                      advanced concepts. Beginners typically begin by grasping the fundamentals: variables, data types, and operators. 
                      As they advance, they delve into functions, arrays, and objects, learning to manipulate data structures effectively. 
                      Understanding control flow and loops becomes crucial for writing efficient code. Next, developers often explore DOM 
                      manipulation for web development, enabling them to create dynamic and interactive web pages. As they progress, 
                      learning about asynchronous JavaScript and APIs opens doors to creating responsive and data-driven applications. 
                      Advanced topics such as ES6+ features, modules, and tools like Webpack and Babel further enhance their skill set. 
                      Additionally, exploring frameworks and libraries like React, Angular, or Vue.js can deepen their understanding of 
                      building complex web applications. Ultimately, the JavaScript roadmap is a dynamic journey where developers continuously 
                      learn, adapt, and apply their knowledge to create impactful and innovative solutions
                      </p>
                      <p className='content-creator-name'> K.L.Bandara</p>
                    </div>
                  </div>
                </div>

        </div>


          
    </div>
  )
}

export default Mentoring