import React, { useEffect, useState } from "react";
import MentorSidebar from "../components/MentorSidebar";
import "../css/ManageResourses.css";
import axiosInstance from '../api/axios';

export default function ManageResourses() {
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
      // Optionally, reset the formData state here if needed
      setFormData({ resTitle: '', description: '' });
      // Optionally, redirect to a different page or perform any other action upon successful addition
    } catch (error) {
      console.error('Error adding resource:', error);
      alert('Error adding resource');
    }
  };

  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axiosInstance.get('resources');
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  const normalizeLink = (link) => {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      return 'http://' + link;
    }
    return link;
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`resources/${id}`);
      setResources(resources.filter(resource => resource.id !== id));
    } catch (error) {
      console.error('Error deleting resource:', error);
    }
  };

  const handleEdit = (id) => {
    // Implement your edit functionality here, e.g., redirect to an edit page
    console.log(`Editing resource with ID: ${id}`);
  };

  return ( 
    <div className="layout-wrapper layout-content-navbar">
      <MentorSidebar />
      <div className="layout-container">
        <div className="text-one coursetitle"> Manage Resourses </div>
        <br />
        <div className="card-content mainA">
          <div className="topic-btn">
            <h5 className="card-header">Referenced Videos & Courses</h5>
            <div>
              <button type="button" className="btn btn2" data-bs-toggle="modal" data-bs-target="#basicModal">Add Resource</button>

              {/* Add Resource Modal */}
              <div className="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <form onSubmit={handleSubmit}>
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel1">Add Resources</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col mb-3">
                            <label for="resTitle" class="form-label">Title</label>
                            <input type="text" id="resTitle" name="resTitle" class="form-control" placeholder="Enter Title" value={formData.resTitle} onChange={handleChange} />
                          </div>
                        </div>
                        <div class="row g-2">
                          <div class="col mb-3">
                            <label for="description" class="form-label">Link</label>
                            <input type="text" id="description" name="description" class="form-control" placeholder="Enter Link" value={formData.description} onChange={handleChange} />
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Add</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Edit model */}
              {/* Your existing edit modal code here */}
            </div>
          </div>
          <div className="table-responsive text-nowrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Link</th>
                  <th>Actions
                    </th>
                  </tr>

              </thead>
              <tbody>
                {resources.map((resource, index) => (
                  <tr key={index}>
                    <td>{resource.resTitle}</td>
                    <td><a href={normalizeLink(resource.description)}>{resource.description}</a></td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn p-0 dropdown-toggle hide-arrow"
                          data-bs-toggle="dropdown"
                        >
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu">
                          <button className="dropdown-item" 
                          data-bs-toggle="modal"
                          data-bs-target="#editbasic" 
                          onClick={() => handleEdit(resource.id)}>
                            <i className="bx bx-edit-alt me-1"></i> Edit
                          </button>
                          <button className="dropdown-item" onClick={() => handleDelete(resource.id)}>
                            <i className="bx bx-trash me-1"></i> Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
