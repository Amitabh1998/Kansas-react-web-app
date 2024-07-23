import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "../reducer";
import "./index.css";

// Define the shape of an Assignment
interface Assignment {
  _id: string;
  title: string;
  description: string;
  course: string;
  dueDate: string;
}

// Define the shape of the RootState
export interface RootState {
  assignmentsReducer: {
    assignments: Assignment[];
  };
}

export default function AssignmentList() {
  const { courseId } = useParams<{ courseId: string }>();
  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const courseAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === courseId
  );

  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div className="container">
      <div className="wd-flex-row-container-1">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`} className="btn btn1 btn-danger">
          + Assignment
        </Link>
      </div>
      <div className="wd-flex-grow-1">
        <h5>Assignments for course {courseId}</h5>
        <div className="list-group">
          {courseAssignments.map((assignment: Assignment) => (
            <div key={assignment._id} className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/edit/${assignment._id}`}>
                  <h6 className="mb-1">{assignment.title}</h6>
                </Link>
                <button
                  className="btn btn1"
                  onClick={() => handleDelete(assignment._id)}
                >
                  🗑️
                </button>
              </div>
              <p className="mb-1">{assignment.description}</p>
              <small>{assignment.dueDate}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}