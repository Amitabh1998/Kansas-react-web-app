import React from 'react';
import { FaSearch, FaPlus, FaCheckCircle } from 'react-icons/fa';

interface AssignmentItemProps {
  title: string;
  dueDate: string;
  startDate: string;
  points: number;
  completed: boolean;
}

const AssignmentItem: React.FC<AssignmentItemProps> = ({ title, dueDate, startDate, points, completed }) => (
  <div className="wd-assignment-item d-flex align-items-center mb-3 p-3 border rounded">
    <div className="me-3" style={{ borderLeft: '4px solid green', height: '40px' }}></div>
    <div className="flex-grow-1">
      <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
        {title}
      </a>
      <p className="mb-0">Due: {dueDate} | Start: {startDate} | Points: {points}</p>
    </div>
    {completed && <FaCheckCircle className="text-success" size={24} />}
  </div>
);

const Assignments: React.FC = () => {
  const assignments = [
    { title: 'A1 - ENV + HTML', dueDate: '2023-06-15', startDate: '2023-06-01', points: 100, completed: true },
    { title: 'A2 - CSS - BOOTSTRAP', dueDate: '2023-07-01', startDate: '2023-06-15', points: 150, completed: false },
    { title: 'A3 - JAVASCRIPT - REACT', dueDate: '2023-07-15', startDate: '2023-07-01', points: 200, completed: false },
  ];

  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <FaSearch className="me-2" />
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
            style={{ width: '300px' }}
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-success me-2">
            <FaPlus className="me-2" />
            Group
          </button>
          <button id="wd-add-assignment" className="btn btn-success">
            <FaPlus className="me-2" />
            Assignment
          </button>
        </div>
      </div>
      <h3 id="wd-assignments-title" className="mb-4">
        ASSIGNMENTS 40% of Total <button className="btn btn-primary">+</button>
      </h3>
      <div id="wd-assignment-list" className="rounded-0">
        {assignments.map((assignment, index) => (
          <AssignmentItem
            key={index}
            title={assignment.title}
            dueDate={assignment.dueDate}
            startDate={assignment.startDate}
            points={assignment.points}
            completed={assignment.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default Assignments;
