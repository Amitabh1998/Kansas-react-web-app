import React from 'react';
import './index.css';

interface EditorPageProps {
  onClose: () => void;
}

const EditorPage: React.FC<EditorPageProps> = ({ onClose }) => {
  console.log('DEBUG here')
  return (
    <div className="editor-container">
      <h2>Edit Assignment</h2>
      <div className="editor-section">
        <label htmlFor="assignmentName">Assignment Name:</label>
        <input type="text" id="assignmentName" name="assignmentName" />
      </div>
      <div className="editor-section">
        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" name="instructions"></textarea>
      </div>
      <div className="editor-section">
        <label htmlFor="points">Points:</label>
        <input type="number" id="points" name="points" />
      </div>
      <div className="editor-section">
        <label htmlFor="assignmentType">Assignment Type:</label>
        <select id="assignmentType" name="assignmentType">
          <option value="assignment">Assignment</option>
        </select>
      </div>
      <div className="editor-section">
        <label htmlFor="displayGrade">Display Grade:</label>
        <select id="displayGrade" name="displayGrade">
          <option value="percentage">Percentage</option>
          <option value="numbers">Numbers</option>
        </select>
      </div>
      <div className="editor-section grouped-section">
        <label htmlFor="submissionType">Submission Type:</label>
        <select id="submissionType" name="submissionType">
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <div className="checkboxes">
          <input type="checkbox" id="textEntry" name="textEntry" />
          <label htmlFor="textEntry">Text Entry</label>
          <input type="checkbox" id="mediaRecordings" name="mediaRecordings" />
          <label htmlFor="mediaRecordings">Media Recordings</label>
          <input type="checkbox" id="websiteUrl" name="websiteUrl" />
          <label htmlFor="websiteUrl">Website Url</label>
          <input type="checkbox" id="fileUpload" name="fileUpload" />
          <label htmlFor="fileUpload">File Upload</label>
          <input type="checkbox" id="studentAnnotations" name="studentAnnotations" />
          <label htmlFor="studentAnnotations">Student Annotations</label>
        </div>
      </div>
      <div className="editor-section">
        <label htmlFor="dueDate">Due Date:</label>
        <input type="datetime-local" id="dueDate" name="dueDate" />
      </div>
      <div className="editor-section">
        <label htmlFor="availableFrom">Available From:</label>
        <input type="datetime-local" id="availableFrom" name="availableFrom" />
      </div>
      <div className="editor-section">
        <label htmlFor="assignedTo">Assigned To:</label>
        <input type="text" id="assignedTo" name="assignedTo" />
      </div>
      <div className="button-section">
        <button className="btn cancel-btn" onClick={onClose}>Cancel</button>
        <button className="btn save-btn" onClick={onClose}>Save</button>
      </div>
    </div>
  );
};

export default EditorPage;