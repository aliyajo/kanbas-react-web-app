import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlus} from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  // Declare the updateMode variable
  const [updateMode, setUpdateMode] = useState(false);

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
        {/* Heading for editing module */}
        {
          updateMode &&
          <h3>Editing Module: 
            <small> {module.name}</small></h3>
        }
        {/* Heading for adding new module */}
        {
          !updateMode &&
          <h3>Add New Module</h3>
        }
        <br />
        {/* Form for module configuration */}
        <li style={{padding: "10px"}}
        className="list-group-item">
        < h5 style={{marginLeft: "10px"}}
        >
          <br/> Module Name:</h5>
          {/* Add/Edit Module Name */}
        <input className="module-input"
        style = {{margin : "10px"}}
         value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
          {/* Save Changes Button if Editing Course */}
            {updateMode && 
          <>
            <button className="btn btn-danger" 
            style={{margin: "5px", height: "40px", width: "60px", borderRadius: "20%"}}
            onClick={() => dispatch(updateModule(module))}
            >Update</button>
            <br />
          </>
          }
        {/* Add Button */}
        {!updateMode &&
        < button style={{margin: "5px", height: "40px", width: "50px", borderRadius: "20%"}}
        className="btn btn-success" 
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >Add</button>
          }
        <br />
        < h5 style={{marginLeft: "10px"}}
        > Module Description:</h5>
        {/* Add/Edit Module Description */}
        <textarea className="module-input" 
        style = {{margin : "10px", height: "100px"}}
        value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>
      {/* Module */}
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            key={index} className="list-group-item"
          >
            {/* Module Aesthetic */}
            <div>
              <RxDragHandleDots2 className="me-2" />
              {module.name}
              <span className="float-end">
                {/* Edit Module Button */}
                <button className="btn button"
                style = {{ borderRadius: "20%", padding: "2px", height: "25px", width: "50px"}}
                onClick={() => { 
                  dispatch(setModule(module));
                  setUpdateMode(true);
              }}>
              Edit
            </button>
                {/* Delete Module Button */}
              <button
                    className="btn btn-danger button"
                      style = {{marginRight: "5px", borderRadius: "20%", padding: "2px", height: "25px", width: "50px"}}
                      onClick={() => dispatch(deleteModule(module._id))}>
                      Delete
                    </button>
                <FaCheckCircle className="text-success" />
                <FaPlus style={{ color: "gray"}} className="ms-2" />
                <FaEllipsisV style={{ color: "gray"}} className="ms-2" />
              </span>
              <p>{module.description}</p>
            </div>
            {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: any) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
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