import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import MentorSidebar from '../components/MentorSidebar';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/AddRoadmap.css';

const EditRoadmap = () => {
  const { roadmapId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rmTitle: '',
    description: '',
    mentorName: '',
    image: null
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchRoadmapData = async () => {
      try {
        const response = await axiosInstance.get(`/roadmaps/${roadmapId}`);
        if (response.data) {
          setFormData({
            rmTitle: response.data.rmTitle,
            description: response.data.description,
            mentorName: response.data.mentorName,
            image: response.data.image
          });
        } else {
          alert('No data found for this roadmap');
        }
      } catch (error) {
        console.error('Error fetching roadmap data:', error);
        alert('Failed to load roadmap data: ' + error.message);
      }
    };

    fetchRoadmapData();
  }, [roadmapId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    setErrors({ ...errors, [name]: error });
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = {};

    Object.keys(formData).forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        formValid = false;
      }
    });

    setErrors(newErrors);

    if (!formValid) {
      return;
    }

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axiosInstance.put(`/roadmaps/${roadmapId}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Roadmap updated successfully');
      navigate('/manageRoadmaps');
    } catch (error) {
      console.error('Error updating roadmap:', error);
      alert('Error updating roadmap: ' + error.message);
    }
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container roadmap">
        <MentorSidebar />
        <div className="roadmap-content-body">
          <h1 className='text-one add-roadmap'>Edit Roadmap</h1>
          <div className="card-content main-roadmap">
            <div className="card-body-roadmap">
              <form className='roadmap-form' onSubmit={handleSubmit}>
                <div className="text-field-roadmap">
                  <label className="form-label" htmlFor="photo-upload">Upload Image:</label>
                  <input type="file" className="form-control" id="photo-upload" accept="image/*" onChange={handleFileChange} />
                  {errors.image && <span className="error-msg">{errors.image}</span>}
                </div>
                <div className="text-field-roadmap">
                  <label className="form-label" htmlFor="rmTitle">Roadmap Title:</label>
                  <input type of="text" className="form-control" id="rmTitle" name="rmTitle" value={formData.rmTitle} onChange={handleChange} />
                  {errors.rmTitle && <span className="error-msg">{errors.rmTitle}</span>}
                </div>
                
                <div className="text-field-roadmap">
                  <label className="form-label" htmlFor="description">Description:</label>
                  <textarea className="form-control" id="description" rows="4" name="description" value={formData.description} onChange={handleChange}></textarea>
                  {errors.description && <span className="error-msg">{errors.description}</span>}
                </div>
                <div className="text-field-roadmap">
                  <label className="form-label" htmlFor="mentorName">Mentor Name:</label>
                  <input type="text" className="form-control" id="mentorName" name="mentorName" value={formData.mentorName} onChange={handleChange} />
                  {errors.mentorName && <span className="error-msg">{errors.mentorName}</span>}
                </div>
                <button type="submit" className="btn-roadmap btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRoadmap;
