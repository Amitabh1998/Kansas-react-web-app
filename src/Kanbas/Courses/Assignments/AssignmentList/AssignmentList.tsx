import React from "react";
import { useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";

export default function AssignmentList() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);
  return (
    <div>
      <h5>Assignments for course {courseId}</h5>
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
    </div>
  );
}