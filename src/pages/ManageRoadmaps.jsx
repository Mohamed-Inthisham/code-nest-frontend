// src/components/ManageRoadmaps.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import MentorSidebar from '../components/MentorSidebar';
import { Link } from 'react-router-dom';
import '../css/ManageRoadmaps.css';

function ManageRoadmaps() {
  const [roadmaps, setRoadmaps] = useState([]);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await axiosInstance.get('/roadmaps');
        setRoadmaps(response.data);
      } catch (error) {
        console.error('Error fetching roadmaps:', error);
      }
    };
    fetchRoadmaps();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/roadmaps/${id}`);
      alert("Roadmap successfully deleted");
      const updatedRoadmaps = roadmaps.filter((roadmap) => roadmap.id !== id);
      setRoadmaps(updatedRoadmaps);
    } catch (error) {
      console.error('Error deleting roadmap:', error);
    }
  };

  return (
    <div className="d-inline-flex p-2 bd-highlight">
      <MentorSidebar />
      <h1 className="text-one coursetitle">Manage Roadmaps</h1>
      <div className="armv">
        <button type="button" className="btn btn-primary arm">
          <Link className="roadmapStyle" to="/addRoadmap">
            Add Roadmap
          </Link>
        </button>
      </div>
      <div>
        <div className="card managecourse finaltablech">
          <div className="table-responsive text-nowrap">
            <table className="table">
              <thead>
                <tr>
                  <th><h4>Roadmap Name</h4></th>
                  <th><h4>Mentor</h4></th>
                  <th><h4>Action</h4></th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {roadmaps.map((roadmap) => (
                  <tr key={roadmap.id}>
                    <td><span className="textv">{roadmap.rmTitle}</span></td>
                    <td>
                      <div className="manageroadmap">
                        <h5 type="text" className="manageroadmaptxt">
                          {roadmap.mentorName}
                        </h5>
                      </div>
                    </td>
                    <td>
                      <div className="manageroadmap">

                        <button
                          type="button"
                          className="manageroadmapbtn2">
                          <a href='/editRoadmap' className='editbtn btn-primary'>Edit</a>

                        </button>
                        <button
                          type="button"
                          className="manageroadmapbtn1 btn-danger"
                          onClick={() => handleDelete(roadmap.id)}
                        >
                          Delete
                        </button>
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

export default ManageRoadmaps;
