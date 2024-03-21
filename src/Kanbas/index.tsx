import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigator from "./Navigation";
import React, {useState } from "react";
import * as db from "./Database";

import { Routes, Route, Navigate } from "react-router-dom";

function Kanbas() {
    // Create courses state
    const [courses, setCourses] = useState<any[]>(db.courses);
    // Create a course object with default values
    const [course, setCourse] = useState({
      "_id": "0",
      "name": "New Course",
      "number": "New Number",
      "semester": "New Semester",
      "startDate": "2023-01-10",
      "endDate": "2023-05-15",
      "image": "reactjs.jpg"
    });
    // Create a addNewCourse event handler
    const addNewCourse = () => {
      // Create a new course object with a unique _id
      const newCourse = { ...course,
                          _id: new Date().getTime().toString() };
      // Add the new course to the courses state
      setCourses([...courses, { ...course, ...newCourse }]);
    };
    // Create a deleteCourse event handler
    const deleteCourse = (courseId: any) => {
      // Filter out the course with the courseId and update the courses state
      setCourses(courses.filter((course) => course._id !== courseId));
    };
    // Create a updateCourse event handler
    const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };
  return (
    <div className="d-flex">
      <KanbasNavigator />
      <div style={{ flexGrow: 1}}>
                <Routes>
                  <Route path="Account" element={<h2>Account</h2>} />
                  <Route path="Dashboard" element={
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}/>
                  } />
                  <Route path="Calendar" element={<h2>Calendar</h2>} />
                  <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
                </Routes>
      </div>
    </div>
  );
}

export default Kanbas;