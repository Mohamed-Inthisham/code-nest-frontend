import React, { useState, useEffect } from "react";
import "../css/Courses.css";
import axiosInstance from "../api/axios";
import { Link } from "react-router-dom";

function Courses() {

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [myLearnings, setMyLearnings] = useState([]);
  const [addedCourses, setAddedCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get("courses");
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Error fetching courses. Please try again later.');
      }
    };

    fetchCourses();
  }, []);

  const addCourseToMyLearnings = (course) => {
    setMyLearnings([...myLearnings, course]);
    setAddedCourses([...addedCourses, course.id]);
  };

  const isCourseAdded = (courseId) => {
    return addedCourses.includes(courseId);
  };

  return (
    <div className="text-one-main">
      <div className="text-one"> My Learnings </div>
      <br></br>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 my-learning-test">
        {myLearnings.map((learnedCourse, index) => (
          <div key={index} className="col">
            <div className="card w-100 h-100">
              <img className="card-img-top" src={`http://localhost:8080/courseImages/${learnedCourse.image}`} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title"><a className='java-course-btn' href='/coursecontent'>{learnedCourse.ctitle}</a></h5>
                <p className="card-text">{learnedCourse.cdescription}</p>
                <div className="course-added">Course Added</div>
                <Link to="/CourseContent" className="btn btn-primary">View Content</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />
      <div className="text-one"> Courses </div>

      <br></br>

      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 my-learning-test">
        {courses.map(course => (
          <div key={course.id} className="col">
            <div className="card w-100 h-100">
              <img className="card-img-top" src={`http://localhost:8080/courseImages/${course.image}`} alt="Course" />
              <div className="card-body">
                <h5 className="card-title">
                  <a className='java-course-btn' href='/coursecontent'>{course.ctitle}</a>
                </h5>
                <p className="card-text">{course.cdescription}</p>
                <button disabled={isCourseAdded(course.id)} onClick={() => addCourseToMyLearnings(course)} className="btn btn-primary">
                  {isCourseAdded(course.id) ? "Course Added" : "Add Course"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
