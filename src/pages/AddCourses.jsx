import React, { useState } from 'react';
import CompanySidebar from '../components/CompanySidebar';
import axiosInstance from '../api/axios';

const AddCourses = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: '',
    description: '',
    comp: ''
  });

  const [formErrors, setFormErrors] = useState({
    image: '',
    title: '',
    description: '',
    comp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
    setFormErrors(prev => ({ ...prev, image: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.image) errors.image = 'Image is required';
    if (!formData.title.trim()) errors.title = 'Course title is required';
    if (!formData.description.trim()) errors.description = 'Course description is required';
    if (!formData.comp.trim()) errors.comp = 'Company name is required';

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    const data = new FormData();
    data.append('image', formData.image);
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('comp', formData.comp);

    try {
      const response = await axiosInstance.post('/courses', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Course added successfully');
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error adding course:', error);
      alert(`Error adding course: ${error.message}`);
    }
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <CompanySidebar />
        <div className="course-content-body">
          <h1 className='text-one add-quiz'>Add Courses</h1>
          <div className="card-content main-con">
            <div className="card-body-exe">
              <form onSubmit={handleSubmit}>
                <div className="text-field">
                  <label className="form-label" htmlFor="photo-upload">Upload Image:</label>
                  <input type="file" className="form-control" id="photo-upload" accept="image/*" onChange={handleFileChange} />
                  {formErrors.image && <div className="error">{formErrors.image}</div>}
                </div>
                <div className="text-field">
                  <label className="form-label" htmlFor="title">Course Title:</label>
                  <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
                  {formErrors.title && <div className="error">{formErrors.title}</div>}
                </div>
                <div className="text-field">
                  <label className="form-label" htmlFor="description">Description:</label>
                  <textarea className="form-control" id="description" rows="4" name="description" value={formData.description} onChange={handleChange}></textarea>
                  {formErrors.description && <div className="error">{formErrors.description}</div>}
                </div>
                <div className="text-field">
                  <label className="form-label" htmlFor="comp">Company Name:</label>
                  <input type="text" className="form-control" id="comp" name="comp" value={formData.comp} onChange={handleChange} />
                  {formErrors.comp && <div className="error">{formErrors.comp}</div>}
                </div>
                <button type="submit" className="btn btn-primary">ADD</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;
