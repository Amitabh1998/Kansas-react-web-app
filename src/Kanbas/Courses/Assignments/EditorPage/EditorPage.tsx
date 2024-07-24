import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import * as client from "../client";
import './index.css';

interface EditorPageProps {
  onClose: () => void;
}

interface Assignment {
  _id?: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFromDate: string;
  availableUntilDate: string;
  course?: string;
}

const EditorPage: React.FC<EditorPageProps> = ({ onClose }) => {
  const { cid: courseId, assignmentId } = useParams<{ cid: string; assignmentId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);

  const [assignment, setAssignment] = useState<Assignment>({
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  });

  useEffect(() => {
    if (assignmentId && assignmentId !== "new") {
      const currentAssignment = assignments.find((a: Assignment) => a._id === assignmentId);
      if (currentAssignment) {
        setAssignment(currentAssignment);
      }
    }
  }, [assignmentId, assignments]);

  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(courseId as string, assignment);
    dispatch(addAssignment({ ...newAssignment, course: courseId }));
  };

  const saveAssignment = async (assignment: any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (assignmentId === "new") {
      // dispatch(addAssignment({ ...assignment, course: courseId }));
      createAssignment(assignment);
    } else {
      // dispatch(updateAssignment(assignment));
       saveAssignment(assignment);
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="editor-container">
      <h3 style={{ color: 'red' }}>Edit Assignment</h3>
      <form onSubmit={handleSubmit}>
        <div id="Assignmentname" className='editor-section'>
          <label htmlFor="title">Assignment Name:</label>
          <input type="text" id="title" name="title" value={assignment.title} onChange={handleChange} />
        </div>
        <div className="instructions-box">
          <label htmlFor="description">Instructions:</label>
          <textarea id="description" name="description" value={assignment.description} onChange={handleChange}></textarea>
        </div>
        <div className="editor-section1">
          <label htmlFor="points">Points:</label>
          <input type="number" id="points" name="points" value={assignment.points} onChange={handleChange} />
        </div>
        <div className="editor-section">
          <label htmlFor="dueDate">Due Date:</label>
          <input type="datetime-local" id="dueDate" name="dueDate" value={assignment.dueDate} onChange={handleChange} />
        </div>
        <div className="editor-section">
          <label htmlFor="availableFromDate">Available From:</label>
          <input type="datetime-local" id="availableFromDate" name="availableFromDate" value={assignment.availableFromDate} onChange={handleChange} />
        </div>
        <div className="editor-section">
          <label htmlFor="availableUntilDate">Available Until:</label>
          <input type="datetime-local" id="availableUntilDate" name="availableUntilDate" value={assignment.availableUntilDate} onChange={handleChange} />
        </div>
        <div className="button-section">
          <button type="button" className="btn cancel-btn" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn save-btn">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditorPage;