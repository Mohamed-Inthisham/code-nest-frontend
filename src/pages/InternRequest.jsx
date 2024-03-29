import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../css/InternRequest.css'
import CompanySidebar from '../components/CompanySidebar'

const InternRequest = () => {

  return (



    <>
        <div>
          <div class="d-inline-flex p-2 bd-highlight">

              <CompanySidebar/>

              
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
                    <button className="btn btn-primary">Send Email</button>
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
                    <button className="btn btn-primary">Send Email</button>
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
                    <button className="btn btn-primary">Send Email</button>
                </td>
              </tr>
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
