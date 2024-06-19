import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index2.css";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {AiFillCheckCircle} from "react-icons/ai";

export default function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (

<div className="wd-flex-row-container">
  <div className="wd-flex">
            <button className="btn-clear" disabled>
              <AiFillCheckCircle/>
                  Published
                </button>
            <button className="btn">
            <BiDotsVerticalRounded/>
            </button>
  </div> 
        <hr />
    <div className="assignment">
      <h5>Assignment Name</h5>
      <input value={assignment?.title}
             className="form-control mb-2" />
        <hr />
      <div className="wd-flex">   
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger">
        Save
      </button>
      </div> 
    </div>
    </div>
  );
}