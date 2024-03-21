import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';

function Dashboard(
    { courses, course, setCourse, addNewCourse,
      deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
      }) {
  // Declare the showForm variable
  const [showForm, setShowForm] = useState(true);
  // Declare the updateMode variable
  const [updateMode, setUpdateMode] = useState(false);

return (
  <div className="p-4">
    {/* Dashboard Heading */}
    <h1>Dashboard</h1>
    <hr />
    <h2>Course 
      {/* Toggle form button // Either show or don't */}
      <button className="btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "▲" : "▼"} <span style={{ fontSize: "12px" }}>Toggle Form</span>
      </button>
    </h2> 
    {/* Form so can input elements for the new course */}
    {showForm && (
      <>
        <hr />
        {/* Update Course Heading */}
        {updateMode && <h2 style={{ marginBottom: "30px"}}>Updating Course: {course.name}</h2>
        }
        {/* Adding Course Name */}
        <input value={course.name} className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        {/* Adding Course Number */}
        <input value={course.number} className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        {/* Adding Semester */}
        <input value={course.semester} className="form-control"
          onChange={(e) => setCourse({ ...course, semester: e.target.value })}
        />
        {/* Adding Start Date */}
        <input value={course.startDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        {/* Adding End Date */}
        <input value={course.endDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
          <input value={course.image} className="form-control"
            onChange={(e) => setCourse({ ...course, image: e.target.value })}
          />
          <br />
          {/* Save Changes Button if Editing Course */}
          {updateMode && 
          <>
            <button className="btn btn-danger" onClick={updateCourse}
            >Save Changes</button>
            <br />
          </>
          }
          {/* Add New Course Button */}
          {!updateMode &&
          <button className="btn btn-danger" onClick={addNewCourse}>
            <FaPlus className="me-2" />
            Add New Course
          </button>
          }
        <hr />
      </>
    )}
    <h2>Published Courses ({courses.length})</h2>
    <hr />
    {/* Game cards for each of the courses from the database */}
    <div className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (
          <div key={course._id} className="col" style={{ width: 300 }}>
            <div className="card">
              <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }}/>
              <div className="card-body">
                <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  {course.name}
                </Link>
                <p className="card-text">{course.name}</p>
                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                  Go
                </Link>
                {/* Add Edit Button to Course */}
                <button
                  className="btn"
                  style={{ marginLeft: "65px" }}
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                    setUpdateMode(true); // Set updateMode to true
                  }}
                >
                  Edit
                </button>
                {/* Add Delete Button to Course */}
                <button
                  className="btn btn-danger"
                  style={{ float: "right" }}
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
} export default Dashboard;