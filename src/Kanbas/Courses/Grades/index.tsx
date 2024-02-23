import { assignments, enrollments, grades, users } from "../../Database";
import { useParams, Link } from "react-router-dom";
import React from "react";
import { FaCheckCircle, FaPlus, FaEllipsisV, FaFileImport, FaFileExport, FaSearch, FaFilter } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  const studentNames = users.map((user) => `${user.firstName} ${user.lastName}`);

  return (
    <div style={{padding: "50px"}}>
      <div className="button-container">
        <span
          style={{
            color: "darkred",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          GradeBook
        </span>
        <span className="float-end">
          <button className="btn btn-outline-secondary btn-custom buttons">
            <FaFileImport className="me-2" />
            Import
          </button>
          <button className="btn  btn-outline-secondary btn-custom buttons">
            <FaFileExport className="me-2" /> Module
          </button>
          <button style={{ width: "40px" }} className="btn btn-outline-secondary btn-custom buttons">
            <BsGearFill className="me-2" />
          </button>
        </span>
      </div>
      <br />
      <hr />
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
            >Student Names</span>
            <br />
            <select
              className="buttons"
              style={{
                marginRight: "30px",
                width: "300px",
                height: "40px",
              }}
            >
              <option disabled selected>
                 Search Students
              </option>
              {studentNames.map((name) => (
                <option value={name}>{name}</option>
              ))}
            </select>
          </div>
          <div>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Assignment Names
            </span>
            <br />
            <select
              className="buttons"
              style={{
                width: "300px",
                height: "40px",
              }}
            >
              <option disabled selected>
                Search Assignment Names
              </option>
              {as.map((assignment) => (
                <option value={assignment.title}>{assignment.title}</option>
              ))}
            </select>
          </div>
          </div>
      </div>
      <button className="btn btn-outline-secondary btn-custom buttons"
      style={{
        width: "150px",
        height: "40px",  
      }}>
        <FaFilter className="me-2" />
        Apply Filters
      </button>
      <br />
      <div className="table-responsive">
        <br />
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <th
            style={{
              border: "1px solid lightgray",
              padding: "5px",
              textAlign: "center",
            }}
          >
            Student Name</th>
          {as.map((assignment) => (
            <th          
            style={{
              border: "1px solid lightgray",
              padding: "5px",
              textAlign: "center",
            }}
            >{assignment.title}</th>
          ))}
        </thead>
        <tbody>
          {es.map((enrollment) => {
            const user = users.find((user) => user._id === enrollment.user);
            return (
              <tr>
                <td>
                  <Link 
                  to={`/Kanbas/Courses/${courseId}/Grades`}
                  style={{ color: "darkred" }}>
                    {user?.firstName} {user?.lastName}
                  </Link>
                </td>
                {as.map((assignment) => { 
                  const grade = grades.find(
                    (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                  );
                  return (
                    <td style={{ 
                      fontSize: "19px",
                      textAlign: "center" }}>
                      {grade?.grade ? (
                        grade.grade
                      ) : (
                        <input className="buttons"
                        style={{width:"70%"}}
                        type="text" />
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}
export default Grades;
