import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MentorNavbar from "./components/MentorNavbar";
import Courses from "./pages/Courses";
import Mentoring from "./pages/Mentoring";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from './pages/Register';
import InternshipReqForm from './pages/InternshipReqForm';
import CourseContent from "./pages/CourseContent";
import Resources from "./pages/Resources"
import Discuss from "./pages/Discuss";
import MentorHomePage from "./pages/MentorHomePage";
import InternRequest from "./pages/InternRequest";
import ManageQuiz from "./pages/ManageQuiz";
import ViewCourses from "./pages/ViewCourses";
import ManageCourses from "./pages/ManageCourses"
import AddCourses from "./pages/AddCourses";
import ViewRoadmap from "./pages/ViewRoadmap";
import ViewQuizzes from "./pages/ViewQuizzes";
import AddQuiz from "./pages/AddQuiz";
import ManageResourses from "./pages/ManageResourses";
import AddResourse from "./pages/AddResourse";
import EditQuiz from "./pages/EditQuiz";
import ManageRoadmaps from "./pages/ManageRoadmaps";
import AddRoadmap from "./pages/AddRoadmap";
import EditRoadmap from "./pages/EditRoadmap"

import EditQuizHome from "./pages/EditQuizHome";
import ViewQuizBody from "./pages/ViewQuizBody";
import EditCourses from "./pages/EditCourses";
import ViewResourses from "./pages/ViewResourses";
import InternInformation from "./pages/InternInformation";
import AddContent from "./pages/AddContent";
import Editor from "./pages/Editor";
import ApprovalReqForm from "./pages/ApprovalReqForm";
import MentorApprovalReqForm from "./pages/MentorApprovalReqForm"

function App() {

  return (

    <div>
      <div>
        <Router>
          <Routes>
            {/* <Route path="/" element={<SignIn />}></Route> */}
            <Route path="/addCourses" element={<><MentorNavbar/><AddCourses /></>}></Route>
          </Routes>
        </Router>
      </div>
   

    <div>
   
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Login /></>}></Route>
          <Route path="/register" element={<><Navbar /><Register /></>}></Route>
          <Route path="/homepage" element={<><Navbar /><Homepage /></>}></Route>
          <Route path="/courses" element={<><Navbar /><Courses /></>}></Route>
          <Route path="/mentoring" element={<><Navbar /><Mentoring /></>}></Route>
          <Route path="/resources" element={<><Navbar /><Resources /></>}></Route>
          <Route path="/discuss" element={<><Navbar /><Discuss /></>}></Route>
          <Route path="/InternshipReqForm" element={<><Navbar /><InternshipReqForm /></>}></Route>
          <Route path="/CourseContent" element={<><Navbar /><CourseContent /></>}></Route>
          <Route path="/mentorHomePage" element={<><MentorNavbar /><MentorHomePage /></>}></Route>
          <Route path="/internRequests" element={<><MentorNavbar /><InternRequest /></>}></Route>
          <Route path="/manageQuiz" element={<><MentorNavbar /><ManageQuiz /></>}></Route>
          <Route path="/viewCourses" element={<><Navbar /><ViewCourses /></>}></Route>
          <Route path="/manageCourses" element={<><MentorNavbar /><ManageCourses /></>}></Route>
          
          <Route path="/viewRoadmap" element={<><Navbar /><ViewRoadmap /></>}></Route>
          <Route path="/viewQuizzes" element={<><Navbar /><ViewQuizzes /></>}></Route>
          <Route path="/addQuiz" element={<><MentorNavbar /><AddQuiz /></>}></Route>
          <Route path="/manageResourses" element={<><MentorNavbar /><ManageResourses /></>}></Route>
          <Route path="/addResourse" element={<><MentorNavbar /><AddResourse /></>}></Route>
          <Route path="/editQuiz" element={<><MentorNavbar /><EditQuiz /></>}></Route>
          <Route path="manageRoadmaps" element={<><MentorNavbar /><ManageRoadmaps /></>}></Route>
          <Route path="/editRoadmap/:roadmapId" element={<><MentorNavbar /><EditRoadmap /></>}></Route>
          <Route path="/addRoadmap" element={<><MentorNavbar /><AddRoadmap /></>}></Route>
          <Route path="/editQuizHome" element={<><MentorNavbar /><EditQuizHome /></>}></Route>
          <Route path="/viewQuizBody" element={<><Navbar /><ViewQuizBody /></>}></Route>
          <Route path="/editCourses" element={<><MentorNavbar /><EditCourses /></>}></Route>
          <Route path="/viewResourses" element={<><Navbar /><ViewResourses /></>}></Route>
          <Route path="/internInformation" element={<><Navbar /><InternInformation /></>}></Route>
          <Route path="/addContent" element={<><MentorNavbar /><AddContent /></>}></Route>
          <Route path="/editor" element={<><Navbar /><Editor /></>}></Route>
          <Route path="/approvalReqForm" element={<><MentorNavbar /><ApprovalReqForm /></>}></Route>
          <Route path="/mentorApprovalReqForm" element={<><MentorNavbar /><MentorApprovalReqForm /></>}></Route>

        </Routes>
      </Router>
    </div>
  </div>
  );
}

export default App;
