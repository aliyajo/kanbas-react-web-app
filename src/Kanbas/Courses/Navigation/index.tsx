import { Link, useLocation } from "react-router-dom";
import "./index.css"; 
import React from "react";
import courses from "../../Database/courses.json";
import { useParams } from "react-router-dom";


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <ul className="wd-course-navigation">
      <li style={{ fontSize: "smaller" }}>
        {course?.number} {course?.semester}
      </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;