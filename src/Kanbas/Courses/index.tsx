import courses from "../Database/courses.json";
import { HiMiniBars3 } from "react-icons/hi2";
import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
    <div >
      <div className="course-mini-navigation">
      <HiMiniBars3 /> {" "}
      {course?._id} {course?.name}
      </div>
      <hr className="horizontal-line"></hr>
    </div>
    <CourseNavigation />
      <div>
        <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{ left: "320px", top: "80px"}}
            >
            <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

  </div>
  );
}
export default Courses;