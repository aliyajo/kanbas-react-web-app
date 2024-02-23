import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";
import {TfiWrite} from "react-icons/tfi"
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  const {duedate} = useParams();

  return (
    <>
    {/* THis is the banner of buttons */}
        <div>
          <input
            type="text"
            placeholder="Search for Assignments"
            className="buttons"
            style={{height:"40px"}}
          />
          <span className="float-end">
        <button className="btn btn-outline-secondary btn-custom buttons"
        style={{marginLeft: "150px"}}>
          <FaPlus className="me-2" style={{ color: "gray" }} />
          Group
        </button>
        <button className="btn btn-danger">
          <FaPlus className="me-2" 
          /> Assignment
        </button>
        <button style={{ width: "40px"}} className="btn btn-outline-secondary btn-custom buttons">
          <FaEllipsisV className="me-2" />
        </button>
        </span>
      </div>
      <hr />
      {/* Top portion banner of the Assignments */}
      <ul className="list-group wd-modules"
      style={{padding: "15px"}}>
        <li className="list-group-item">
          <div>
            <FaEllipsisV style={{ color: "gray"}} className="me-2" /> 
            <span style={{fontWeight:"bold"}}>ASSIGNMENTS</span>
            <span className="float-end">
              <span style={{ border: "1px solid lightgray", padding: "2px", borderRadius: "5px", fontSize: "13px" }}>
                40% of total
              </span>
              <FaCheckCircle style={{marginLeft: "6px"}} className="text-success" />
              <FaPlus style={{ color: "gray"}} className="ms-2" />
              <FaEllipsisV style={{ color: "gray"}} className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item d-flex align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <RxDragHandleDots2 style={{ color: "gray" }} className="me-2" />
                    <TfiWrite style={{ color: "green" }} className="me-2" />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="assignment-link"
                    style={{
                      marginLeft: "10px",
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    {assignment.title}
                  </Link>
                  <br />
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/`}
                    style={{
                      fontSize: "10px",
                      color: "darkred",
                      marginLeft: "10px",
                      marginRight: "5px", 
                    }}
                  >
                    Multiple Modules
                  </Link>
                  <span style={{ fontSize: "10px", color: "grey" }}>
                    | {assignment.duedate}
                  </span>
                </div>
                <div className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV style={{ color: "gray" }} className="ms-2" />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;