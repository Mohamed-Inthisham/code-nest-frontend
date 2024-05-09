import React, { useState } from 'react';
import '../css/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Password: '',
  });

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

    if (!formData.Username.trim()) {
      validationErrors.Username = "Username or email is required";
    }

    if (!formData.Password.trim()) {
      validationErrors.Password = "Password is required";
    }

    setErrors(validationErrors); // Set errors after validation

    if (Object.keys(validationErrors).length === 0) {
      alert("Sign in successfully");
    }
  };

  return (
    <>
      <div className="container-xxlv">
        <div className="authentication-wrapperv authentication-basic container-p-y">
          <div className="authentication-innerv">
            <div>
              <br />
              <br />
            </div>
            <div className="card cardv-login">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="index.html" className="app-brand-link gap-2"></a>
                </div>
                <br />
                <h4 className="mt-4 mb-2">Welcome to Code Nest! 👋</h4>

                <p className="mb-4">
                  <br />
                  Please Sign-In to your account and start learning..
                </p>
                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email or Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="Username"
                      placeholder="Enter your email or username"
                      autoFocus=""
                      value={formData.Username}
                      onChange={handleChange}
                    />
                    {errors.Username && <div className="text-danger">{errors.Username}</div>}
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <a href="auth-forgot-password-basic.html">
                        <small className="cursor-pointer">Forgot Password?</small>
                      </a>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="Password"
                        placeholder="············"
                        aria-describedby="password"
                        value={formData.Password}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.Password && <div className="text-danger">{errors.Password}</div>}
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember-me"
                      />
                      <label className="form-check-label" htmlFor="remember-me">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div>
                    <br />
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary d-grid w-100 mt-0" type="submit">
                      Sign in
                    </button>
                  </div>
                </form>
                <p className="text-center">
                  <span>New on our platform?</span>
                  <a href="register">
                    <span className="cursor-pointer"> Create an account</span>
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

export default Login;
