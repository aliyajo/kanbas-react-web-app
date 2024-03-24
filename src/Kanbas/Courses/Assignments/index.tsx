import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  const assignmentsList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  // Create a new assignment list
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentReducer.assignments
  );
  // Create a new assignment
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentReducer.assignment
  );
  // Create dispatch function
  const dispatch = useDispatch();
  // Create handleDelete variable
  const handleDelete = (assignmentId: any) => {
    // Ask for confirmation
    const confirmation = window.confirm(
      "Are sure you want to remove the assignment?"
    );
    if (confirmation) {
      dispatch(deleteAssignment(assignmentId));
    }
  };
  return (
    <div style={{ overflowY: "auto", maxHeight: "100vh"
     }}>
      {/* This is the banner of buttons */}
      <div>
        <input
          type="text"
          placeholder="Search for Assignments"
          className="buttons"
          style={{ height: "40px" }}
        />
        <span className="float-end">
          <button
            className="btn btn-outline-secondary btn-custom buttons"
            style={{ marginLeft: "150px" }}
          >
            <FaPlus className="me-2" style={{ color: "gray" }} />
            Group
          </button>
          {/* Add Assignment Button */}
          <button className="btn btn-danger">
            <Link
              style={{
                textDecoration: "none",
                marginRight: "5px",
                color: "white",
              }}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            >
              <FaPlus className="me-2" />
              Assignment
            </Link>
          </button>
          <button
            style={{ width: "40px" }}
            className="btn btn-outline-secondary btn-custom buttons"
          >
            <FaEllipsisV className="me-2" />
          </button>
        </span>
      </div>
      <hr />
      <ul
        className="list-group wd-modules"
        style={{ padding: "15px" }}
      >
        <li className="list-group-item">
          <div>
            <FaEllipsisV style={{ color: "gray" }} className="me-2" />
            <span style={{ fontWeight: "bold" }}>ASSIGNMENTS</span>
            <span className="float-end">
              <span
                style={{
                  border: "1px solid lightgray",
                  padding: "2px",
                  borderRadius: "5px",
                  fontSize: "13px",
                }}
              >
                40% of total
              </span>
              <FaCheckCircle style={{ marginLeft: "6px" }} className="text-success" />
              <FaPlus style={{ color: "gray" }} className="ms-2" />
              <FaEllipsisV style={{ color: "gray" }} className="ms-2" />
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
                    {/* Changing the format of the database due date */}
                    | Due{" "}
                    {new Date(assignment.duedate).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}{" "}
                    | {assignment.points} Points
                  </span>
                </div>
                <div className="float-end">
                  <button
                    className="btn btn-danger"
                    style={{
                      marginRight: "10px",
                      borderRadius: "5px",
                      height: "30px",
                      width: "60px",
                    }}
                    onClick={() => handleDelete(assignment._id)}
                  >
                    Delete
                  </button>
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV style={{ color: "gray" }} className="ms-2" />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Assignments;