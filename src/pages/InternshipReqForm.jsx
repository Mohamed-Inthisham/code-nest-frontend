import React, { useState } from 'react';
import '../css/InternshipReqForm.css';
import axiosInstance from '../api/axios';
import internshipForm from '../images/intern.png'

const InternshipReqForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    cv: null // For file
  });

  const [errors, setErrors] = useState({});

  const [submissionStatus, setSubmissionStatus] = useState(null); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Basic validations
    let error = '';
    if (name === 'fullname' && !value.trim()) {
      error = 'Full Name is required';
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Email is not valid';
    } else if (name === 'phoneNumber' && !/^\d{10}$/.test(value)) {
      error = 'Phone Number must be 10 digits';
    }
     
    
    setErrors({
      ...errors,
      [name]: error,
    });

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0] // Store file object
    });
    setErrors({
      ...errors,
      cv: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Additional check for errors before submission
    let formHasErrors = false;
    let newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors = {
        ...newErrors,
        fullname: 'Full Name is required',
      };
      formHasErrors = true;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors = {
        ...newErrors,
        email: 'Email is not valid',
      };
      formHasErrors = true;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors = {
        ...newErrors,
        phoneNumber: 'Phone Number must be 10 digits',
      };
      formHasErrors = true;
    }

    if (!formData.cv) {
      newErrors = {
        ...newErrors,
        cv: 'CV/Resume is required',
      };
      formHasErrors = true;
    }

    if (formHasErrors) {
      setErrors(newErrors);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullname);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('contact', formData.phoneNumber);
      formDataToSend.append('files', formData.cv);

      // Send form data to server with correct content type
      const response = await axiosInstance.post('internship', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Handle response here
      console.log(response.data); // Log the response data

      // Clear the form after successful submission
      setFormData({
        fullname: '',
        email: '',
        phoneNumber: '',
        cv: null
      });
      setErrors({});
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error if needed
      setSubmissionStatus('error');
    }
  };

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div className="app-brand demo">
              <span className="app-brand-text demo menu-text fw-bold ms-2">
                Java Basics
              </span>
            </div>
            <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div data-i18n="Layouts">Java Introduction</div>
                </a>
              </li>
              <li className="menu-item ">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div data-i18n="Layouts">Java Output</div>
                </a>
              </li>
              <li className="menu-item ">
                <a href="" className="menu-link menu-toggle">
                  <div data-i18n="Layouts">Java Comments</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div data-i18n="Layouts">Java Variables</div>
                </a>
              </li>
              <div className='certificatebtn'>
                <a href="#" target="_blank" className="btn rounded-pill btn-outline-success">Claim Certificate</a>
              </div>
              <div className="internshipReqBtn">
                <a href="#" className="btn btn-dark">Internship Request</a>
              </div>
            </ul>
          </aside>
          <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
              <div className="layout-page-home">
              <div className="internshipForm-container">
                  <img src={internshipForm} alt="internshipForm" className="internshipForm" />
                  <div className="card-form">
                <div className="row-con">
                  <div className="col-lg1">
                    <div className="card-form ">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h3 className="req-to"><b>Request to Internship</b></h3>
                      </div>
                      <div className="card-body-1">
                      {submissionStatus === 'success' && (
                          <div className="alert alert-success" role="alert">
                            Form submitted successfully!
                          </div>
                        )}
                        <form onSubmit={handleSubmit}>
                          <div className="text-feild">
                            <label className="form-label" htmlFor="basic-default-fullname">Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="basic-default-fullname"
                              placeholder="Enter full Name"
                              name="fullname"
                              value={formData.fullname}
                              onChange={handleChange}
                            />
                            {errors.fullname && <span className="error-msg">{errors.fullname}</span>}
                          </div>

                          <div className="text-feild">
                            <label className="form-label" htmlFor="basic-default-email">Email</label>
                            <div className="input-group input-group-merge">
                              <input
                                type="text"
                                id="basic-default-email"
                                className="form-control"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {errors.email && <span className="error-msg">{errors.email}</span>}
                            </div>
                          </div>

                          <div className="text-feild">
                            <label className="form-label" htmlFor="basic-default-phone">Phone No</label>
                            <input
                              type="text"
                              id="basic-default-phone"
                              className="form-control phone"
                              placeholder="Enter Phone number"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                            />
                            {errors.phoneNumber && <span className="error-msg">{errors.phoneNumber}</span>}
                          </div>

                          <div className="text-feild">
                            <label className="form-label" htmlFor="basic-default-file">Upload Your CV/Resume</label>
                            <input
                              type="file"
                              className="form-control"
                              accept="application/pdf"
                              id="basic-default-file"
                              onChange={handleFileChange}
                            />
                            {errors.cv && <span className="error-msg">{errors.cv}</span>}
                          </div>

                          <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipReqForm;
