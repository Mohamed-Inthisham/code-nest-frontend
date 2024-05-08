import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
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

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/mentoring" element={<Mentoring />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/discuss" element={<Discuss />}></Route>
          <Route path="/InternshipReqForm" element={<InternshipReqForm />}></Route>
          <Route path="/CourseContent" element={<CourseContent />}></Route>
          <Route path="/mentorHomePage" element={<MentorHomePage />}></Route>
          <Route path="/internRequests" element={<InternRequest />}></Route>
          <Route path="/manageQuiz" element={<ManageQuiz />}></Route>
          <Route path="/viewCourses" element={<ViewCourses />}></Route>
          <Route path="/manageCourses" element={<ManageCourses />}></Route>
          <Route path="/addCourses" element={<AddCourses />}></Route>
          <Route path="/viewRoadmap" element={<ViewRoadmap />}></Route>
          <Route path="/viewQuizzes" element={<ViewQuizzes />}></Route>
          <Route path="/addQuiz" element={<AddQuiz />}></Route>
          <Route path="/manageResourses" element={<ManageResourses />}></Route>
          <Route path="/addResourse" element={<AddResourse />}></Route>
          <Route path="/editQuiz" element={<EditQuiz />}></Route>
          <Route path="manageRoadmaps" element={<ManageRoadmaps />}></Route>
          <Route path="/editRoadmap/:roadmapId" element={<EditRoadmap />}></Route>
          <Route path="/addRoadmap" element={<AddRoadmap />}></Route>
          <Route path="/editQuizHome" element={<EditQuizHome />}></Route>
          <Route path="/viewQuizBody" element={<ViewQuizBody />}></Route>
          <Route path="/editCourses" element={<EditCourses />}></Route>
          <Route path="/viewResourses" element={<ViewResourses />}></Route>
          <Route path="/internInformation" element={<InternInformation />}></Route>
          <Route path="/addContent" element={<AddContent />}></Route>

          <Route path="/editor" element={<Editor />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
