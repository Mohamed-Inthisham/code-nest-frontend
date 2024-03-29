import React from "react";
import "../css/Courses.css";
import image7 from "../images/course1.png";
import image8 from "../images/course2.png";
import image9 from "../images/course3.jpeg";
import image1 from "../images/myLearning1.png";
import image2 from "../images/myLearning2.png";
import image3 from "../images/myLearning3.jpeg";
import image4 from "../images/myLearning4.png";
import image5 from "../images/myLearning5.png";
import image6 from "../images/myLearning6.png";

function Courses() {
  return (
    <div className="text-one-main">
      <div className="text-one"> My Learnings </div>
        <br></br>

              <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 my-learning-test">
                <div className="col ">
                  <div className="card h-100">
                    <img className="card-img-top" src={image8} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title"><a className='java-course-btn' href='/coursecontent'>Java Basics</a></h5>
                      <p className="card-text">
                        Time to get serious and really see what Java (and you!) can do!
                        In this course you’ll learn some concepts related to
                        Object-Oriented Programming (OOP), Collections, and working with
                        files. You’ll be a pro in no time!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100">
                    <img className="card-img-top" src={image9} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Introduction to HTML</h5>
                      <p className="card-text">
                        This simple, beginner-friendly Java course requires no previous
                        coding knowledge. All you need is a mobile phone or desktop
                        computer and 5 minutes a day! You'll learn all about the key
                        concepts of Java, and will be writing clear, working code right
                        from your first lesson.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100">
                    <img className="card-img-top" src={image7} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Introduction to CSS</h5>
                      <p className="card-text">
                        Our CSS course will teach you how to control the style &amp;
                        layout of websites. You’ll complete a series of exercises and
                        practice while filling out actual CSS templates — so you get
                        real coding experience to build confidence and help you tackle
                        your own projects!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

      <hr />
      <div className="text-one"> Courses </div>

      <br></br>

            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                  <div className="col trans-test">
                    <div className="card h-100">
                      <img className="card-img-top" src={image5} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to C</h5>
                        <p className="card-text">
                          Our C tutorial covers basic concepts, data types, arrays, pointers,
                          conditional statements, loops, functions, strings, structures, unions,
                          and much more. No coding experience is required, and you can learn in
                          just 5 minutes a day!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col trans-test">
                    <div className="card h-100">
                      <img className="card-img-top" src={image4} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to Python</h5>
                        <p className="card-text">
                          Python is a popular, easy-to-learn, and very powerful programming
                          language, which is used in software and web development, data science,
                          machine learning, and many other fields. In this course, we'll cover
                          the basic concepts of Python, as well as build real-life projects and
                          solve different coding challenges. Python for Beginners requires no
                          prior programming experience, so let's dive right in!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col trans-test">
                    <div className="card h-100">
                      <img className="card-img-top" src={image3} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to SQL</h5>
                        <p className="card-text">
                          Data is powerful, but only if you know how to use it. That's where SQL
                          comes in! In this course, you'll learn how to use the SQL standardized
                          database language to access and manipulate data stored in databases.
                          Once you know how to use SQL, you'll be able to join top companies
                          (and even governments! who use data to make predictions and decisions
                          about everything from what products to develop to how democracy should
                          function. You don't need any previous coding experience for this
                          course, so dive right in!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col trans-test">
                    <div className="card h-100">
                      <img className="card-img-top" src={image1} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">C# Intermediate</h5>
                        <p className="card-text">
                          Perfect for those with some experience in C# who want to deepen their
                          skills, this course breaks down complex concepts into simple,
                          bite-size lessons that take just 5 minutes. With plenty of practice
                          exercises, it's sure to make you a more confident C# programmer!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col trans-test">
                    <div className="card h-100">
                      <img className="card-img-top" src={image2} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Introduction to C++</h5>
                        <p className="card-text">
                          Learn the basics of this popular coding language. Our C++ course
                          covers basic concepts, data types, arrays, pointers, conditional
                          statements, loops, functions. You don't need any previous coding
                          experience to do this course. We'll explain everything in short,
                          clear, beginner-friendly language.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col trans-test">
                    <div className="card h-100">
                      <img className="card-img-top" src={image6} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Tech for Everyone</h5>
                        <p className="card-text">
                          Sometimes it can feel really hard to keep up with today's fast-paced,
                          ever changing digital world. Understanding technology makes it easier
                          and gives you a competitive advantage.But, what exactly is the
                          Internet? How does it work? And what opportunities can you find
                          online? You'll be able to answer these questions and more by the end
                          of this course.
                        </p>
                      </div>
                    </div>
                  </div>
            </div>

    </div>
  );
}

export default Courses;
