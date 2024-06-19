import React from "react";
import AssignmentList from "./AssignmentList/AssignmentList";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {BiDotsVerticalRounded} from "react-icons/bi"
import "./index.css";


export default function Assignments() {
  // const { courseId } = useParams();
  // const assignments = db.assignments;
  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId);
  return (
  

    <div className="wd-flex-grow-1">
      <input placeholder="Search for Assignment"/>
      <div className="wd-flex-row-container-1 wd-flex-grow-1">
            <button className="btn1">
              <AiOutlinePlus/>
              Group</button> 
            <button className="btn1 btn-danger">
              <AiOutlinePlus/>
                Assignment
            </button>
            <button className="btn1">
            <BiDotsVerticalRounded/>
            </button>
      </div>      
        <hr />
     
      <AssignmentList/>

    {/* <div>
      <h3>Assignments for course {courseId}</h3>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div> */}
    </div>
  );
}