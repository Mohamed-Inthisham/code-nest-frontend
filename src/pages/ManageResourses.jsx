import React, { useEffect, useState } from "react";
import MentorSidebar from "../components/MentorSidebar";
import "../css/ManageResourses.css";
import axiosInstance from '../api/axios';

export default function ManageResourses() {
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
              <button type="button" className="btn btn-primary btn2">
                <a className="add-video-link" href="/addResourse">
                  Add Resource
                </a>
              </button>
            </div>
          </div>
          <div className="table-responsive text-nowrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Link</th>
                  <th>Actions</th>
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
                          <button className="dropdown-item" onClick={() => handleEdit(resource.id)}>
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
