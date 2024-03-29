import React, { useState } from 'react';
import '../css/InternshipReqForm.css';

const InternshipReqForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
  });
  const [resumeFile, setResumeFile] = useState(null);


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.fullname.trim()) {
      validationErrors.fullname = 'Full name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }

    if (!formData.phoneNumber.trim()) {
      validationErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = 'Phone number must contain only numbers';
    }  else if (formData.phoneNumber.length < 10) {
      validationErrors.phoneNumber = 'Phone number is not valid';
    }

    if (!resumeFile) {
      validationErrors.resume = 'Please upload your resume';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Submitted Successfully');
      // You can add code here to submit the form to your backend
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
            <a href="#" target="_blank" class="btn rounded-pill btn-outline-success">Claim Certificate</a>
         </div>
         <div className="internshipReqBtn">
            <a href="#" class="btn btn-dark">Internship Request</a>
         </div>
       
      
      </ul>
  </aside>

      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <div className="layout-page-home">
            <div className="row-con">
              <div className="col-lg1">
                <div className="card-form ">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h3 className="req-to"><b>Request to Internship</b></h3>
                  </div>
                  <div className="card-body-1">
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
                          id="basic-default-file"
                          onChange={(e) => setResumeFile(e.target.files[0])}
                        />
                        {errors.resume && <div className="error-msg">{errors.resume}</div>}

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
  );
};

export default InternshipReqForm;
