import CompanySidebar from '../components/CompanySidebar';
import '../css/ApprovalReqForm.css';

const ApprovalReqForm = () => {
  return(
  <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container ">
            <CompanySidebar />
            <form>
          <div className="form12 card mb-3">  
            <div className="form-group12">
                <label>Company Name</label>
                <input 
                    type="text" 
                    name="name"  
                    placeholder="Enter your name" 
                    className="form-control"
                />
            </div>

            <div className="form-group12">
                <label>Contact Number</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter email" 
                    className="form-control"
                />
            </div>

            <div className="form-group12">
                <label>Accreditation and Certification</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter email" 
                    className="form-control"
                />
            </div>

            <div className="form-group12">
                <label>Website URL</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter email" 
                    className="form-control"
                />
            </div>

            <div className="form-group12">
                <label>Description of Company</label>
                <textarea 
                    rows={3} 
                    name="message" 
                    placeholder="Enter your message" 
                    className="form-control"
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
          </div>    
        </form>
  </div>
  </div>  
  )
}         

export default ApprovalReqForm;