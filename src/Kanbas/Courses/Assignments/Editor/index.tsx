import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  selectAssignment,
} from "../assignmentsReducer";
import { KanbasState } from "../../../store";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
// Create AssignmentEditor function
function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentReducer.assignments.find((a) => a._id === assignmentId)
  );
  // Create navigate variable
  const navigate = useNavigate();
  // Create dispatch function
  const dispatch = useDispatch();
  // -- These variables are used to store the assignment data -- 
  // Create assignmentName variable
  const [assignmentName, setAssignmentName] = useState(assignment ? assignment.title : "New Assignment");
  // Create description variable
  const [description, setDescription] = useState(assignment ? assignment.description || "" : "New Assignment Description");
  // Create points variable
  const [points, setPoints] = useState(assignment ? assignment.points || "" : "0");
  // Create dueDate variable
  const [dueDate, setDueDate] = useState(assignment ? assignment.dueDate || "" : "");
  // Create availableFromDate variable
  const [availableFromDate, setAvailableFromDate] = useState(assignment ? assignment.availableFromDate || "" : "");
  // Create availableUntil variable
  const [availableUntil, setAvailableUntil] = useState(assignment ? assignment.availableUntil || "" : "");
  // use useEffect to update the assignment data
  useEffect(() => {
    if (assignment) {
      setAssignmentName(assignment.title);
      setDescription(assignment.description || "");
      setPoints(assignment.points || "");
      setDueDate(assignment.dueDate || "");
      setAvailableFromDate(assignment.availableFromDate || "");
      setAvailableUntil(assignment.availableUntil || "");
    }
  }, [assignment]);
  // Create handleAssignmentUpdate variable
  const handleAssignmentUpdate = () => {
    const updatedAssignment = {
      ...assignment,
      title: assignmentName,
      description,
      points,
      dueDate,
      availableFromDate,
      availableUntil,
    };
    dispatch(updateAssignment(updatedAssignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  // Create handleAssignmentSave variable
  const handleAssignmentSave = () => {
    const newAssignment = {
      title: assignmentName,
      description,
      points,
      dueDate,
      availableFromDate,
      availableUntil,
    };
    dispatch(addAssignment(newAssignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div style={{ padding: "15px" }}>
      <div>
        <span className="d-flex float-end">
          <button
            className="btn btn-outline-secondary btn-custom buttons"
            style={{
              border: "0px",
              backgroundColor: "transparent",
              color: "green",
            }}
          >
            <FaCheckCircle className="me-2" style={{ color: "green" }} />
            Publish
          </button>
          <button
            style={{ width: "40px" }}
            className="btn btn-outline-secondary btn-custom buttons"
          >
            <FaEllipsisV style={{ color: "gray" }} className="me-2" />
          </button>
        </span>
      </div>
      <br />
      <br />
      <hr />
      <div>
        <h5>
          <strong>
            {assignment ? `Editing Assignment : ${assignment.title}` : "Add New Assignment"}
          </strong>
        </h5>
        <br />
        <h6>Assignment Name</h6>
        <input
          value={assignmentName}
          className="form-control mb-2"
          onChange={(e) => setAssignmentName(e.target.value)}
        />
        <h6>Assignment Description</h6>
        <textarea
          value={description}
          className="form-control mb-2"
          onChange={(e) => setDescription(e.target.value)}
        />
        <h6>Points</h6>
        <input
          value={points}
          className="form-control mb-2"
          onChange={(e) => setPoints(e.target.value)}
        />
        <div>
          <h6>Due Date</h6>
          <input
            value={dueDate}
            type="datetime-local"
            className="form-control mb-2"
            onChange={(e) => setDueDate(e.target.value)}
          />
          <h6>Available from</h6>
          <input
            value={availableFromDate}
            type="date"
            className="form-control mb-2"
            onChange={(e) => setAvailableFromDate(e.target.value)}
          />
          <h6>Until</h6>
          <input
            value={availableUntil}
            type="date"
            className="form-control mb-2"
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </div>
        <hr />
        {assignment ? (
          <button onClick={handleAssignmentUpdate} className="btn btn-danger ms-2 float-end">
            Update
          </button>
        ) : (
          <button onClick={handleAssignmentSave} className="btn btn-danger ms-2 float-end">
            Save
          </button>
        )}
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn float-end buttons"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default AssignmentEditor;