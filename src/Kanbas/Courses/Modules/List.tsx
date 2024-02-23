import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlus} from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  return (
    <>
      <div className="button-container">
        <button className="btn btn-outline-secondary btn-custom buttons">
          Collapse All
        </button>
        <button className="btn btn-outline-secondary btn-custom buttons">
          View Progress
        </button>
        <button className="btn btn-outline-secondary btn-custom buttons">
          <FaCheckCircle className="me-2" style={{ color: "green" }} />
          Publish All
        </button>
        <button className="btn btn-danger">
          <FaPlus className="me-2" /> Module
        </button>
        <button style={{ width: "40px"}} className="btn btn-outline-secondary btn-custom buttons">
          <FaEllipsisV style={{ color: "gray"}} className="me-2" />
        </button>
      </div>
      <hr />
      <ul className="list-group wd-modules"
      style={{padding: "15px"}}>
        {modulesList.map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <RxDragHandleDots2 className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlus style={{ color: "gray"}} className="ms-2" />
                <FaEllipsisV style={{ color: "gray"}} className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <RxDragHandleDots2 className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV style={{ color: "gray"}} className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ModuleList;