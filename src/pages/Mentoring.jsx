import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import { Link } from "react-router-dom";
import "../css/Mentoring.css";

function Mentoring() {
  const [roadmaps, setRoadmaps] = useState([]);
  const [error, setError] = useState(null);
  console.log(roadmaps);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await axiosInstance.get("roadmaps");
        setRoadmaps(response.data);
      } catch (error) {
        console.error("Error fetching roadmaps:", error);
        setError("Error fetching roadmaps. Please try again later.");
      }
    };

    fetchRoadmaps();
  }, []);

  return (
    <div>
      <div className="demo-inline-spacing bn-main">
        <button type="button" className="btn btn-secondary bn-mentoring-main">
          <Link to="/mentoring">
            <h6 className="bn-word-main">Roadmap</h6>
          </Link>
        </button>
        <button type="button" className="btn btn- bn-mentoring">
          <Link to="/resources">
            <h6 className="bn-word">Resources</h6>
          </Link>
        </button>
      </div>

      <div className="roadmap-one">
        {roadmaps.map((roadmap) => (
          <div key={roadmap.id}>
            <hr />
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  className="card-img card-img-left smaller-image1"
                  src={`http://localhost:8080/roadMapImages/${roadmap.image}`}
                  alt="Card image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title card-title-adjust">
                    {roadmap.rmTitle}
                  </h5>
                  <p className="card-text card-content-adjust">
                    {roadmap.description}
                  </p>
                  <p className="content-creator-name">{roadmap.mentorName}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentoring;
