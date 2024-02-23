import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div style={{padding:"15px"}}>
        <div>
        <span className="d-flex float-end">
            <button className="btn btn-outline-secondary btn-custom buttons"
                    style={{ border: "0px", backgroundColor: "transparent", color: "green" }}>
                <FaCheckCircle className="me-2" style={{ color: "green" }} />
                Publish
            </button>
            <button style={{ width: "40px"}} className="btn btn-outline-secondary btn-custom buttons">
                <FaEllipsisV style={{ color: "gray"}} className="me-2" />
            </button>   
        </span>
        </div>
        <br />
        <br />
        <hr />
    <div>
      <h6>Assignment Name</h6>
      <input value={assignment?.title}
             className="form-control mb-2" />
        <br />
        <hr />
      <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn float-end buttons">
        Cancel
      </Link>
      </div>
    </div>
  );
}
export default AssignmentEditor;