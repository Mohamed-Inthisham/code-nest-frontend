import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import Mentoring from "./pages/Mentoring";
import Homepage from "./pages/Homepage";
import Resources from "./pages/Resources"
import Discuss from "./pages/Discuss";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/mentoring" element={<Mentoring />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/discuss" element={<Discuss />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
