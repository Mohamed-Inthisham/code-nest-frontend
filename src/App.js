import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import Mentoring from "./pages/Mentoring";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<Login />}></Route>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/mentoring" element={<Mentoring />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
