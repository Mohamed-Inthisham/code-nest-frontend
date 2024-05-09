import React, { useState } from 'react';
import '../css/Register.css';

const Register = () => {
    // Define state variables
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        're-type_password': '',
        terms: false,
        role: '', // Add role to the form data
    });

    const [errors, setErrors] = useState({});

    // Event handler for changes in form fields
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        // Validation checks for required fields
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
        if (!formData.role.trim()) {
            validationErrors.role = "Role is required";
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

        // Set errors and display if validation fails
        setErrors(validationErrors);

        // Handle form submission success
        if (Object.keys(validationErrors).length === 0) {
            alert("Registered Successfully");
            // Add your form submission logic here
        }
    };

    return (
        <>
            <div className="container-xxlv">
                <div className="authentication-wrapperv authentication-basic container-p-y">
                    <div className="authentication-innerv">
                    <h4 className="mb-0.5 mt-2 ml-10 text-color-blue">Learning starts here 🚀</h4>
                        <div className="card cardv-reg">
                            <div className="card-body">
                                <div className="app-brand justify-content-center"></div>
                                {/* <h4 className="mb-0.5 mt-2">Learning starts here 🚀</h4> */}
                                <form id="formAuthentication" className="mb-2 w-700" onSubmit={handleSubmit}>
                                    {/* First Name */}
                                    <div className="mb-2">
                                        <label htmlFor="firstname" className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control h-10 -mt-1"
                                            id="firstname"
                                            name="firstname"
                                            placeholder="Enter your first name"
                                            autoFocus=""
                                            onChange={handleChange}
                                            value={formData.firstname}
                                        />
                                        {errors.firstname && <div className="text-danger">{errors.firstname}</div>}
                                    </div>
                                    {/* Last Name */}
                                    <div className="mb-2">
                                        <label htmlFor="lastname" className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control h-10 -mt-1"
                                            id="lastname"
                                            name="lastname"
                                            placeholder="Enter your last name"
                                            onChange={handleChange}
                                            value={formData.lastname}
                                        />
                                        {errors.lastname && <div className="text-danger">{errors.lastname}</div>}
                                    </div>
                                    {/* Email */}
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="text"
                                            className="form-control h-10 -mt-1"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                        {errors.email && <div className="text-danger">{errors.email}</div>}
                                    </div>
                                    {/* Role Selection */}
                                    <div className="mb-2">
                                        <label htmlFor="role" className="form-label">Role</label>
                                        <select
                                            id="role"
                                            name="role"
                                            className="form-control h-10 -mt-1"
                                            onChange={handleChange}
                                            value={formData.role}
                                        >
                                            <option value="">-- Select Role --</option>
                                            <option value="student">Student</option>
                                            <option value="mentor">Mentor</option>
                                            <option value="company">Company</option>
                                        </select>
                                        {errors.role && <div className="text-danger">{errors.role}</div>}
                                    </div>
                                    {/* Password */}
                                    <div className="mb-2 form-password-toggle">
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control h-10 -mt-1"
                                                name="password"
                                                placeholder="Enter your password"
                                                aria-describedby="password"
                                                onChange={handleChange}
                                                value={formData.password}
                                            />
                                            <span className="input-group-text cursor-pointer mb-0 -mt-1">
                                                <i className="bx bx-hide" />
                                            </span>
                                        </div>
                                        {errors.password && <div className="text-danger">{errors.password}</div>}
                                    </div>
                                    {/* Re-type Password */}
                                    <div className="mb-2 form-password-toggle">
                                        <label className="form-label" htmlFor="re-type_password">
                                            Re-type Password
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="re-type_password"
                                                className="form-control h-10 -mt-1"
                                                name="re-type_password"
                                                placeholder="Re-enter your password"
                                                aria-describedby="re-type_password"
                                                onChange={handleChange}
                                                value={formData['re-type_password']}
                                            />
                                            <span className="input-group-text cursor-pointer mb-0 -mt-1">
                                                <i className="bx bx-hide" />
                                            </span>
                                        </div>
                                        {errors['re-type_password'] && (
                                            <div className="text-danger">{errors['re-type_password']}</div>
                                        )}
                                    </div>
                                    {/* Terms and Conditions */}
                                    <div className="mb-2">
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
                                                I agree to <a href="javascript:void(0);">privacy policy &amp; terms</a>
                                            </label>
                                            {errors.terms && <div className="text-danger">{errors.terms}</div>}
                                        </div>
                                    </div>
                                    {/* Submit Button */}
                                    <button className="btn btn-primary d-grid w-100 mb-3">Sign up</button>
                                </form>
                                {/* Already have an account? */}
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
