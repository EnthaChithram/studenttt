
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import Home from './home';
import Courses from "./courses";
import CourseTypes from "./courseTypes";
import CourseOfferings from "./courseOfferings";
import Register from "./register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />


        <Routes>
          <Route path="/courses" element={<Courses />}></Route>

          <Route path="/coursetypes" element={<CourseTypes />}></Route>
          <Route path="/courseofferings" element={<CourseOfferings />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Courses />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
