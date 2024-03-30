import React, { useState } from 'react';
import MentorSidebar from '../components/MentorSidebar';
import '../css/AddResourses.css';
import axiosInstance from '../api/axios';

export default function AddResourse() {
  const [formData, setFormData] = useState({
    resTitle: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('resources', formData);
      alert('Resource added successfully');
      // Optionally, redirect to a different page or perform any other action upon successful addition
    } catch (error) {
      console.error('Error adding resource:', error);
      alert('Error adding resource');
    }
  };

  // Function to add protocol to the link if it doesn't already have one
  const normalizeLink = (link) => {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      return 'http://' + link;
    }
    return link;
  };

  return (
    <div className="d-inline-flex p-2 bd-highlight">
      <MentorSidebar />
      <div className="text-one coursetitle df"> Add Resources </div>
      <br />
      <div className="card-content main-con1">
        <div className="card-body-exe">
          <form onSubmit={handleSubmit}>
            <div className="text-feild">
              <label className="form-label" htmlFor="basic-default-name">Title</label>
              <input type="text" className="form-control" id="basic-default-name" name="resTitle" value={formData.resTitle} onChange={handleChange} />
            </div>
            <div className="text-feild">
              <label className="form-label" htmlFor="basic-default-Link">Link</label>
              <input type="text" className="form-control" id="basic-default-Link" name="description" value={formData.description} onChange={handleChange} />
            </div>
            <button type="submit" className="btn rounded-pill btn-outline-success">Add</button>
          </form>
        </div>
      </div>
      {/* Render the link */}
      <a href={normalizeLink(formData.description)} target="_blank" rel="noopener noreferrer">{formData.description}</a>
    </div>
  );
}
