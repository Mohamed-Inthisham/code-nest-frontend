import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from '../api/axios';
import CompanySidebar from '../components/CompanySidebar';
import '../css/InternRequest.css';

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

  const handleEmail = (email, fullName) => {
    const subject = encodeURIComponent(`Regarding your internship application`);
    const body = encodeURIComponent(`Dear ${fullName},\n\nWe have reviewed your application and would like to discuss further steps. Please let us know your availability for a meeting.\n\nBest regards,\nSysco Lab`);
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const handleDownloadPdf = async () => {
    try {
      const response = await axiosInstance.get('/report/pdf', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.pdf');
      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      alert('Download successfully!');
    } catch (error) {
      console.error('Failed to download file:', error);
      alert('Failed to download file!');
    }
  };

  return (
    <>
      <div>
        <div className="d-inline-flex p-2 bd-highlight">
          <CompanySidebar />
          <h1 className='text-one coursetitle'>Internship List</h1>
          <div className="card" id="intern-list">
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
                      <td><span className="fw-medium">{intern.date}</span></td>
                      <td>{intern.fullName}</td>
                      <td><span className="fw-medium">{intern.contact}</span></td>
                      <td><span className="fw-medium">{intern.email}</span></td>
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
                        <button className="btn btn-primary" onClick={() => handleEmail(intern.email, intern.fullName)}>Send Email</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
        <button className="btn btn-success" onClick={handleDownloadPdf}>Download PDF</button>
      </div>
    </>
  );
}

export default InternRequest;
