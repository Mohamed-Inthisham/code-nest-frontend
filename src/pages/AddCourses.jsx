import React, { useState } from 'react';
import CompanySidebar from '../components/CompanySidebar';
import axiosInstance from '../api/axios'; // Make sure axiosInstance is properly configured

const AddCourses = () => {
  const [formData, setFormData] = useState({
    image: null,
    cTitle: '',
    cDescription: '',
    companyName: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('image', formData.image);
    data.append('cTitle', formData.cTitle);
    data.append('cDescription', formData.cDescription);
    data.append('companyName', formData.companyName);

    try {
      // Send POST request to backend
      const response = await axiosInstance.post('courses', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response.data);
      // Handle success response
      alert('Course added successfully');
      // Redirect or perform any other action upon successful addition
    } catch (error) {
      // Handle error
      console.error('Error adding course:', error);
      alert('Error adding course: ' + error.message);
    }
  };

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container ">
          <CompanySidebar />
          <div className="course-content-body">
            <h1 className='text-one add-quiz'>Add Courses</h1>
            <div className="card-content main-con">
              <div className="card-body-exe">
                <form onSubmit={handleSubmit}>
                  <div className="text-field">
                    <label className="form-label" htmlFor="photo-upload">Upload Image:</label>
                    <input type="file" className="form-control" id="photo-upload" accept="image*" onChange={handleFileChange} />
                  </div>
                  <div className="text-feild">
                    <label className="form-label" htmlFor="cTitle">Course Title:</label>
                    <input type="text" className="form-control" id="cTitle" name="cTitle" value={formData.cTitle} onChange={handleChange} />
                  </div>
                  <div className="text-field">
                    <label className="form-label" htmlFor="cDescription">Description:</label>
                    <textarea className="form-control" id="cDescription" rows="4" name="cDescription" value={formData.cDescription} onChange={handleChange}></textarea>
                  </div>
                  <div className="text-field">
                    <label className="form-label" htmlFor="companyName">Company Name:</label>
                    <input type="text" className="form-control" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn-roadmap">ADD</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;
