import React from 'react';
import { useParams } from 'react-router-dom';
import * as db from '../../Database';
import { AiOutlinePlus, AiOutlineCheckCircle } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsFileEarmarkText, BsGripVertical, BsSearch } from 'react-icons/bs';
import { FaPlus, FaFileImport, FaFileExport } from 'react-icons/fa';
import './index.css';

export default function Grades() {
  const { cid } = useParams();
  const maxPoints = 100;

  // Filtering students who are enrolled in the course
  const students = db.users.filter(user => user.role === "STUDENT" && db.enrollments.some(enrollment => enrollment.course === cid && enrollment.user === user._id));
  
  const courseGrade = db.grades;
  const courseAssignments = db.assignments.filter(assignment => assignment.course === cid);

  return (
    <div id="wd-grades" className="ms-5">
      <div className="wd-flex-row-container justify-content-between mb-3">
        <div className="wd-flex-row-container">
          <div className="position-relative me-2">
            <BsSearch className="position-absolute float-start mt-2 ms-2" />
            <input
              id="wd-search-students"
              placeholder="Search Students"
              className="form-control"
              style={{ fontSize: '22px', width: '250px', height: '40px', borderRadius: '8px', borderColor: '#ECECEC' }}
            />
          </div>
          <div className="position-relative">
            <BsSearch className="position-absolute float-start mt-2 ms-2" />
            <input
              id="wd-search-assignments"
              placeholder="Search Assignments"
              className="form-control"
              style={{ fontSize: '22px', width: '250px', height: '40px', borderRadius: '8px', borderColor: '#ECECEC' }}
            />
          </div>
        </div>
        <div className="wd-flex-row-container">
          <button id="wd-import-grades" className="btn btn-primary me-2">
            <FaFileImport className="me-1" />
            Import
          </button>
          <div className="dropdown d-inline">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <FaFileExport className="me-1" />
              Export
            </button>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Student Name</th>
              {courseAssignments.map((assignment) => (
                <th key={assignment._id} scope="col">{assignment.title} <br /> Out of {maxPoints}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.firstName} {student.lastName}</td>
                {courseAssignments.map((assignment) => {
                  const grade = courseGrade.find(grade => grade.student === student._id && grade.assignment === assignment._id);
                  return (
                    <td key={assignment._id}>
                      {grade ? `${grade.grade}%` : 'N/A'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
