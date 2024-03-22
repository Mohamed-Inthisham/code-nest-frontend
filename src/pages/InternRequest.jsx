import React from "react";
import { Link } from "react-router-dom";
import '../css/InternRequest.css'

function InternRequest() {
  return (
    <>
      <div className="card " id="intern-list">
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
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              <tr>
                <td>
                  <span className="fw-medium">2024.01.23</span>
                </td>
                <td>Albert Cook</td>
                <td>
                  <span className="fw-medium">0716598265</span>
                </td>
                <td>
                  <span className="fw-medium">Dasun@gmail.com</span>
                </td>
                <td>
                  <span className="fw-medium">cv58674.pdf</span>
                </td>
                <td>
                  <td>
                    <span className="badge bg-label-danger"> Reject </span>
                  </td>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                      <i class="uis uis-check-circle"></i>Accept
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                      <i class='bx bxs-user-x'>Reject</i>
                      </a>
                      <Link
                        to={"/user-profile"}
                        className="dropdown-item"
                        href="javascript:void(0);"
                      >
                        <i class='bx bx-envelope'>Send Email</i>
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="fw-medium">2024.01.23</span>
                </td>
                <td>Albert Cook</td>
                <td>
                  <span className="fw-medium">0716598265</span>
                </td>
                <td>
                  <span className="fw-medium">Dasun@gmail.com</span>
                </td>
                <td>
                  <span className="fw-medium">cv58674.pdf</span>
                </td>
                <td>
                  <td>
                    <span className="badge bg-label-success"> Accepted </span>
                  </td>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="bx bx-edit-alt me-1" /> Edit
                      </a>
                      <Link
                        to={"/user-profile"}
                        className="dropdown-item"
                        href="javascript:void(0);"
                      >
                        <i class="bx bx-user-circle" /> View Profile
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="fw-medium">2024.01.23</span>
                </td>
                <td>Albert Cook</td>
                <td>
                  <span className="fw-medium">0716598265</span>
                </td>
                <td>
                  <span className="fw-medium">Dasun@gmail.com</span>
                </td>
                <td>
                  <span className="fw-medium">cv58674.pdf</span>
                </td>
                <td>
                  <td>
                    <span className="badge bg-label-warning"> pending </span>
                  </td>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="bx bx-edit-alt me-1" /> Edit
                      </a>
                      <Link
                        to={"/user-profile"}
                        className="dropdown-item"
                        href="javascript:void(0);"
                      >
                        <i class="bx bx-user-circle" /> View Profile
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="fw-medium">2024.01.23</span>
                </td>
                <td>Albert Cook</td>
                <td>
                  <span className="fw-medium">0716598265</span>
                </td>
                <td>
                  <span className="fw-medium">Dasun@gmail.com</span>
                </td>
                <td>
                  <span className="fw-medium">cv58674.pdf</span>
                </td>
                <td>
                  <td>
                    <span className="badge bg-label-danger"> Reject </span>
                  </td>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="bx bx-edit-alt me-1" /> Edit
                      </a>
                      <Link
                        to={"/user-profile"}
                        className="dropdown-item"
                        href="javascript:void(0);"
                      >
                        <i class="bx bx-user-circle" /> View Profile
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default InternRequest;
