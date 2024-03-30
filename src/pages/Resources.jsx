import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import '../css/Mentoring.css';
import { Link } from 'react-router-dom';

function Resources() {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axiosInstance.get('resources');
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setError('Error fetching resources. Please try again later.');
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

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      <div className="demo-inline-spacing bn-main">
        {/* Your buttons */}
      </div>

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

      <div className="reff-course">
        <div className="demo-inline-spacing mt-3">
          <div className="list-group">
            <a href="javascript:void(0);" className="list-group-item list-group-item- flex-column align-items-start reff-courses-main">
              <div className="reff-courses">
                <h4 className='reff-courses-heading'>Referenced Videos & Courses</h4>
              </div>
            </a>

            {resources.map(resource => (
              <a key={resource.id} href={normalizeLink(resource.description)} className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex justify-content-between w-100">
                  <h5>{resource.resTitle}</h5>
                  <small className="text-muted">{resource.date}</small>{/* Assuming you have a 'date' field */}
                </div>
                {/* Assuming you want to display the URL */}
                <p className="mb-1"><a href={normalizeLink(resource.description)}>{resource.description}</a></p>
              </a>
            ))}
          </div>
        </div>    
      </div>
    </div>
  );
}

export default Resources;
