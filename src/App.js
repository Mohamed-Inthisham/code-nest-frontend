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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
