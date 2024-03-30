import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/InternRequest.css';
import CompanySidebar from '../components/CompanySidebar';
import axiosInstance from '../api/axios';

const InternRequest = () => {
  const [internshipData, setInternshipData] = useState([]);

  useEffect(() => {
    const fetchInternshipData = async () => {
      try {
        const response = await axiosInstance.get('internship');
        setInternshipData(response.data);
      } catch (error) {
        console.error('Error fetching internship data:', error);
      }
    };

    fetchInternshipData();
  }, []);

  const handlePdfClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <div>
        <div className="d-inline-flex p-2 bd-highlight">
          <CompanySidebar />
          <div className="card" id="intern-list">
            <h5 className="card-header" id="emphead">
              Internship Request List
            </h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>CV</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {internshipData.map((intern, index) => (
                    <tr key={index}>
                      <td>
                        <span className="fw-medium">{intern.date}</span>
                      </td>
                      <td>{intern.fullName}</td>
                      <td>
                        <span className="fw-medium">{intern.contact}</span>
                      </td>
                      <td>
                        <span className="fw-medium">{intern.email}</span>
                      </td>
                      <td>
                        <span 
                          className="fw-medium"
                          onClick={() => handlePdfClick(`http://localhost:8080/cv/${intern.cv}`)}
                          style={{ cursor: "pointer", color: "blue" }}
                        >
                          {intern.cv}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-primary">Send Email</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternRequest;
