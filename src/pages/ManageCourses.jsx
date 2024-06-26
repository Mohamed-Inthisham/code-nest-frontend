import React, { useState, useEffect } from 'react';
import CompanySidebar from '../components/CompanySidebar';
import '../css/ManageCourses.css';
import axiosInstance from '../api/axios';

function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get('courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Error fetching courses. Please try again later.');
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`courses/${id}`);
      const updatedCourses = courses.filter(course => course.id !== id);
      setCourses(updatedCourses);
    } catch (error) {
      console.error('Error deleting course:', error);
      setError('Error deleting course. Please try again later.');
    }
  };

  const handleDownloadReport = async () => {
    try {
      const response = await axiosInstance.get('/course/report/pdf', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'course_report.pdf');
      document.body.appendChild(link);
      link.click();
      
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      alert('Download successfully!');
    } catch (error) {
      console.error('Failed to download report:', error);
      alert('Failed to download report!');
    }
  };

  return (
    <div class="d-inline-flex p-2 bd-highlight">
      <CompanySidebar />
      <h1 className='text-one coursetitle'>Manage Courses</h1>

      <div className='qwe'>
        <button type="button" className='rty'> <h1 ><a className='courseStyle' href='/addCourses'>Add Courses</a></h1> </button>
      </div>

      <div>
        <div class="card managecourse">
          <div class="table-responsive text-nowrap">
            <table class="table">
              <thead>
                <tr>
                  <th><h4>Course Name</h4></th>
                  <th><h4>Action</h4></th>
                </tr>
              </thead>
              <tbody class="table-border-bottom-0">
                {courses.map(course => (
                  <tr key={course.id}>
                    <td className='d-flex gap-3'>
                      <img src={`http://localhost:8080/courseImages/${course.image}`} alt={course.ctitle} className="course-thumbnail w-10" />
                      <span class="fw-medium">{course.title}</span>
                    </td>
                    <td>
                      <div class="managecoursebtnmain">
                        <button type="button" class="managecoursebtn1 btn-danger" onClick={() => handleDelete(course.id)}>Delete</button>
                        <button type="button" class="managecoursebtn2 btn-primary"><a href='/editCourses' className='uu'>Edit</a></button>
                        <button type="button" class="managecoursebtn3 btn-primary"><a href='/addContent' className='uu'>Add Content</a></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            
          </div>
        </div>
        <button className="btn btn-success" onClick={handleDownloadReport}>Download PDF</button>
      </div>
      
    </div>
  );
}

export default ManageCourses;
