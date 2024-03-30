import React, { useState } from 'react';
import MentorSidebar from '../components/MentorSidebar';
import '../css/AddRoadmap.css';
import axiosInstance from '../api/axios';

const AddRoadmap = () => {
  const [formData, setFormData] = useState({
    image: null,
    rmTitle: '',
    description: '',
    mentorName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('image', formData.image);
    data.append('rmTitle', formData.rmTitle);
    data.append('description', formData.description);
    data.append('mentorName', formData.mentorName);

    try {
      const response = await axiosInstance.post('roadmaps', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Handle success response
      alert('Roadmap added successfully');
      // Redirect or perform any other action upon successful addition
    } catch (error) {
      // Handle error
      alert('Error adding roadmap: ' + error);
    }
  };

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container roadmap">
          <MentorSidebar />
          <div className="roadmap-content-body">
            <h1 className='text-one add-roadmap'>Add Roadmap</h1>
            <div class="card-content main-roadmap">
              <div class="card-body-roadmap">
                <form className='roadmap-form' onSubmit={handleSubmit}>
                  <div class="text-field-roadmap">
                    <label class="form-label" for="photo-upload">Upload Photo:</label>
                    <input type="file" class="form-control" id="photo-upload" accept="image/*" onChange={handleFileChange} />
                  </div>
                  <div class="text-field-roadmap">
                    <label class="form-label" for="rmTitle">Roadmap Title :</label>
                    <input type="text" class="form-control" id="rmTitle" name="rmTitle" value={formData.rmTitle} onChange={handleChange} />
                  </div>
                  <div class="text-field-roadmap">
                    <label class="form-label" for="description">Description :</label>
                    <textarea class="form-control" id="description" rows="4" name="description" value={formData.description} onChange={handleChange}></textarea>
                  </div>
                  <div class="text-field-roadmap">
                    <label class="form-label" for="mentorName">Mentor Name :</label>
                    <input type="text" class="form-control" id="mentorName" name="mentorName" value={formData.mentorName} onChange={handleChange} />
                  </div>
                  <button type="submit" class="btn-roadmap">ADD</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoadmap;
