import React, { useState } from 'react';
import '../css/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    're-type_password': '', // Changed to match the name attribute in the input
    terms: false, // Added for the checkbox
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.firstname.trim()) {
      validationErrors.firstname = "First name is required";
    }

    if (!formData.lastname.trim()) {
      validationErrors.lastname = "Last name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password should be at least 8 characters";
    }

    if (formData['re-type_password'] !== formData.password) {
      validationErrors['re-type_password'] = "Passwords do not match";
    }

    if (!formData.terms) {
      validationErrors.terms = "Please agree to the terms";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
      // You can add code here to submit the form to your backend
    }
  };

  return (
    <>
      <div className="container-xxlv">
        <div className="authentication-wrapperv authentication-basic container-p-y">
          <div className="authentication-innerv">
            <div className="card cardv-reg">
              <div className="card-body">
                <div className="app-brand justify-content-center"></div>
                <h4 className="mb-2">Learning starts here 🚀</h4>
                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      placeholder="Enter your first name"
                      autoFocus=""
                      onChange={handleChange}
                      value={formData.firstname}
                    />
                    {errors.firstname && <div className="text-danger">{errors.firstname}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                      placeholder="Enter your last name"
                      onChange={handleChange}
                      value={formData.lastname}
                    />
                    {errors.lastname && <div className="text-danger">{errors.lastname}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter your password"
                        aria-describedby="password"
                        onChange={handleChange}
                        value={formData.password}
                      />
                      {errors.password && <div className="text-danger">{errors.password}</div>}
                      <span className="input-group-text cursor-pointer">
                        <i className="bx bx-hide" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <label className="form-label" htmlFor="re-type_password">
                      Re-type Password
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="re-type_password"
                        className="form-control"
                        name="re-type_password"
                        placeholder="Re-enter your password"
                        aria-describedby="re-type_password"
                        onChange={handleChange}
                        value={formData['re-type_password']}
                      />
                      {errors['re-type_password'] && (
                        <div className="text-danger">{errors['re-type_password']}</div>
                      )}
                      <span className="input-group-text cursor-pointer">
                        <i className="bx bx-hide" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms-conditions"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="terms-conditions">
                        I agree to
                        <a href="javascript:void(0);"> privacy policy &amp; terms</a>
                      </label>
                      {errors.terms && <div className="text-danger">{errors.terms}</div>}
                    </div>
                  </div>
                  <button className="btn btn-primary d-grid w-100">Sign up</button>
                </form>
                <p className="text-center">
                  <span>Already have an account?</span>
                  <a href="/">
                    <span className="cursor-pointer"> Sign in instead</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
