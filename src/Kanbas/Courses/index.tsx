import courses from "../Database/courses.json";
import { HiMiniBars3 } from "react-icons/hi2";
import React from "react";
import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";


function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId) ;
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  return (
    <div>
      {/* Mini sub bar of navigation in courses */}
      <div className="course-mini-navigation">
        <HiMiniBars3 /> {" "} {course?.number} {course?.name} /
        {/*Breadcrumb*/}
        {pathSegments.slice(3).map((segment, index) => (
          <React.Fragment key={index}>
            <Link to={`/${segment}`}
            className="course-mini-navigation"
            style={{textDecoration:"none"}}>{segment}</Link>
            {index !== pathSegments.length - 4 && <span> / </span>}
          </React.Fragment>
        ))}
      </div>
      <hr className="horizontal-line"></hr>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "80px"}}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;