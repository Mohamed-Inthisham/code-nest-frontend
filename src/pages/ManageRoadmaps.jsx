import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import MentorSidebar from '../components/MentorSidebar';
import { Link } from 'react-router-dom';
import '../css/ManageRoadmaps.css';

function ManageRoadmaps() {
  const [roadmaps, setRoadmaps] = useState([]);
  const [editData, setEditData] = useState({
    rmTitle: '',
    description: '',
    mentorName: '',
    image: null, // To handle image data
    id: null
  });

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  const fetchRoadmaps = async () => {
    try {
      const response = await axiosInstance.get('/roadmaps');
      setRoadmaps(response.data);
    } catch (error) {
      console.error('Error fetching roadmaps:', error);
      alert('Failed to fetch roadmaps.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/roadmaps/${id}`);
      setRoadmaps(roadmaps.filter(roadmap => roadmap.id !== id));
      alert("Roadmap successfully deleted");
    } catch (error) {
      console.error('Error deleting roadmap:', error);
      alert('Failed to delete roadmap.');
    }
  };

  const handleChangeEdit = (event) => {
    const { name, value } = event.target;
    setEditData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    setEditData(prevState => ({
      ...prevState,
      image: event.target.files[0]
    }));
  };

  const handleEdit = (roadmap) => {
    setEditData({
      rmTitle: roadmap.rmTitle,
      description: roadmap.description,
      mentorName: roadmap.mentorName,
      image: null, // Reset image on edit start
      id: roadmap.id
    });
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    if (editData.id) {
      try {
        const formData = new FormData();
        formData.append('rmTitle', editData.rmTitle);
        formData.append('description', editData.description);
        formData.append('mentorName', editData.mentorName);
        if (editData.image) {
          formData.append('image', editData.image);
        }
        
        await axiosInstance.put(`/roadmaps/${editData.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('Roadmap updated successfully!');
        fetchRoadmaps(); // Refresh the roadmaps
        setEditData({ rmTitle: '', description: '', mentorName: '', image: null, id: null }); // Reset the edit form
      } catch (error) {
        console.error('Failed to update roadmap:', error);
        alert('Failed to update roadmap.');
      }
    }
  };

  return (
    <div className="d-inline-flex p-2 bd-highlight">
      <MentorSidebar />
      <div className="container">
        <h1 className="text-one coursetitle">Manage Roadmaps</h1>
        <Link to="/addRoadmap" className="btn btn-primary">
          Add Roadmap
        </Link>
        <div className="card managecourse finaltablech">
          <div className="table-responsive text-nowrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Roadmap Name</th>
                  <th>Mentor</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {roadmaps.map((roadmap) => (
                  <tr key={roadmap.id}>
                    <td>{roadmap.rmTitle}</td>
                    <td>{roadmap.mentorName}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => handleEdit(roadmap)} data-bs-toggle="modal" data-bs-target="#editRoadmapModal">
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={() => handleDelete(roadmap.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Roadmap Modal */}
      <div className="modal fade" id="editRoadmapModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Roadmap</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleEditSubmit}>
                <div className="mb-3">
                  <label htmlFor="rmTitle" className="form-label">Roadmap Title:</label>
                  <input type="text" className="form-control" id="rmTitle" name="rmTitle" value={editData.rmTitle} onChange={handleChangeEdit} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <textarea className="form-control" id="description" rows="3" name="description" value={editData.description} onChange={handleChangeEdit}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="mentorName" className="form-label">Mentor Name:</label>
                  <input type="text" className="form-control" id="mentorName" name="mentorName" value={editData.mentorName} onChange={handleChangeEdit} />
                </div>
                <div className="mb-3">
                  <label htmlFor="photo-upload" className="form-label">Upload Photo:</label>
                  <input type="file" className="form-control" id="photo-upload" accept="image/*" onChange={handleFileChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update Roadmap</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageRoadmaps;
