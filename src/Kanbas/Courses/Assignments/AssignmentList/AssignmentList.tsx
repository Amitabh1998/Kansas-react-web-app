import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import {assignments} from "../../../Database";
import { Link } from "react-router-dom";

export default function AssignmentList() {
    const { courseId } = useParams();
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
        console.log("Course ID:", courseId);
        console.log("Course Assignments:", courseAssignments);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h5>Assignments for course {courseId}</h5>
                    <div className="list-group">
                        {courseAssignments.map((assignment) => (
                            <div key={assignment._id} className="list-group-item">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-1">{assignment.title}</h6>
                                </div>
                                <p className="mb-1">Multiple Modules</p>
                        
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
