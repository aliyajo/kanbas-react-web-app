import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  selectAssignment,
} from "../assignmentsReducer";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentReducer.assignments.find((a) => a._id === assignmentId)
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Create the updateMode variable
  const [updateMode] = useState(assignment?.title ? true : false);
  
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
          {updateMode && <h5><strong>Editing Assignment : {assignment?.title}</strong></h5>
        }
        {/* Heading if adding new assignment */}
        {!updateMode && <h5><strong>Add New Assignment</strong></h5>}
        <br />
        {/* Edit Assignment Name */}
        <h6>Assignment Name</h6>
        <input
          value={assignment?.title || "New Assignment"}
          className="form-control mb-2"
          onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
        />
        {/*
        <br />

        {/* Edit Assignment Description */}
        <h6>Assignment Description</h6>
        <textarea
          value={assignment?.description || "New Assignment Description"}
          className="form-control mb-2"
          onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
        />
        {/* Edit Assignment Points */}
        <h6>Points</h6>
        <input
          value={assignment?.points || 0}
          className="form-control mb-2"
        />
        <br />
        <div>
          <h6> Assign</h6>
          <div style={{ width: "50%", margin: "0 auto"}}>
            {/* Edit Due Date */}
            <h6>Due Date</h6>
            <input
              value={assignment?.duedate}
              type="datetime-local"
              className="form-control mb-2"
              onChange={(e) => dispatch(selectAssignment({ ...assignment, duedate: e.target.value }))}
            />
          {/* Edit Available from date */}
          <h6>Available from</h6>
          <input
            value={assignment?.availablefrom }
            type="date"
            className="form-control mb-2"
            onChange={(e) => dispatch(selectAssignment({ ...assignment, availablefrom: e.target.value }))}
          />
          {/* Edit Until Date */}
          <h6>Until</h6>
          <input
            value={assignment?.until}
            type="date"
            className="form-control mb-2"
            onChange={(e) => dispatch(selectAssignment({ ...assignment, until: e.target.value }))}
          />
        </div>
        </div>
        <hr />
        {/* Update Assignment */}
        {
          updateMode &&
          <button
            onClick={() => {
              dispatch(updateAssignment(assignment));
              navigate(`/Kanbas/Courses/${courseId}/Assignments`);
            }}
            className="btn btn-danger ms-2 float-end"
          >
            Update
          </button>
        }
        {/* Add New Assignment */}
        {!updateMode &&
        <button onClick={() => {
          dispatch(addAssignment(assignment));
          navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        }} 
        className="btn btn-danger ms-2 float-end">
          Save
        </button>
        }
        {/* Cancel, Don't Save */}
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