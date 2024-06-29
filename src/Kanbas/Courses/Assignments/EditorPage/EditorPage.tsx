import React from 'react';
import './index.css';

interface EditorPageProps {
  onClose: () => void;
}

const EditorPage: React.FC<EditorPageProps> = ({ onClose }) => {
  console.log('DEBUG here')
  return (
    <div className="editor-container">
      <h3 style={{ color: 'red' }}>Edit Assignment</h3>
      <div id="Assignmentname" className='editor-section'>
        <label htmlFor="assignmentName">Assignment Name:</label>
        <input type="text" id="assignmentName" name="assignmentName" placeholder='New Assignment' value="A1"/>
      </div>
      <div id="instructions" className = "instructions-box">
          <p>The assignment is available online.</p>
          <p>Submit a link to the landing page of your Web application running on Netlify.</p>
          <p>The landing page should include the following:
            <ul id = "list of deliverables">
              <li>Your full name and section</li>
              <li>Links to each of the lab assignment</li>
              <li>Link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
          </p>
          The Kanbas application should include a link to navigate back to the landing page.
      </div>
      <div className = "editor-section1">
        <label htmlFor="points">Points:</label>
        <input type="number" id="points" name="points" />
      </div>
      <div className="drop-down">
        <label htmlFor="displayGrade">Display Grade:</label>
        <select id="displayGrade" name="displayGrade">
          <option value="percentage">Percentage</option>
          <option value="numbers">Numbers</option>
        </select>
      </div>
      <div className="instructions-box">
        <label htmlFor="submissionType">Submission Type:</label>
        <select id="submissionType">
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <div id="checkboxes" style = {{width:'300px'}}>
          <input type="checkbox" id="textEntry" name="textEntry" />
          <label htmlFor="textEntry">Text Entry</label><br/>
          <input type="checkbox" id="mediaRecordings" name="mediaRecordings" />
          <label htmlFor="mediaRecordings">Media Recordings</label><br/>
          <input type="checkbox" id="websiteUrl" name="websiteUrl" />
          <label htmlFor="websiteUrl">Website Url</label><br/>
          <input type="checkbox" id="fileUpload" name="fileUpload" />
          <label htmlFor="fileUpload">File Upload</label><br/>
          <input type="checkbox" id="studentAnnotations" name="studentAnnotations" />
          <label htmlFor="studentAnnotations">Student Annotations</label><br/>
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
  
      <div className="button-section">
        <button className="btn cancel-btn" onClick={onClose}>Cancel</button>
        <button className="btn save-btn" onClick={onClose}>Save</button>
      </div>
    </div>
  );
};

export default EditorPage;