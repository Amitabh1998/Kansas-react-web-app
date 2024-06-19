import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface AssignmentItemProps {
  title: string;
  dueDate: string;
  startDate: string;
  points: number;
  onEdit: () => void;
}

const AssignmentItem: React.FC<AssignmentItemProps> = ({ title, dueDate, startDate, points, onEdit }) => (
  <div className="wd-assignment-item d-flex align-items-center mb-3">
    <div className="me-3" style={{ borderLeft: '4px solid green', height: '40px' }}></div>
    <div>
      <button className="wd-assignment-link btn btn-link p-0" onClick={onEdit}>
        {title}
      </button>
      <p className="mb-0">
        Due: {dueDate} | Start: {startDate} | Points: {points}{' '}
        <FaCheckCircle className="text-success" />
      </p>
    </div>
  </div>
);

export default AssignmentItem;
