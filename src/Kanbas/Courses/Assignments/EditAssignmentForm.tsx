import React from 'react';

interface EditAssignmentFormProps {
  assignment: {
    title: string;
    description: string;
    points: number;
    dueDate: string;
  };
  onSave: () => void;
  onCancel: () => void;
}

const EditAssignmentForm: React.FC<EditAssignmentFormProps> = ({ assignment, onSave, onCancel }) => {
  return (
    <div className="container mt-4">
      <h2>Edit Assignment</h2>
      <form className="p-4 border rounded">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
            <input type="text" className="form-control" id="assignmentName" defaultValue={assignment.title} />
          </div>
          <div className="col-md-6">
            <label htmlFor="points" className="form-label">Points</label>
            <input type="number" className="form-control" id="points" defaultValue={assignment.points} />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="assignmentDescription" className="form-label">Description</label>
          <textarea className="form-control" id="assignmentDescription" rows={6} defaultValue={assignment.description} />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="dueDate" className="form-label">Due Date</label>
            <input type="datetime-local" className="form-control" id="dueDate" defaultValue={assignment.dueDate} />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          <button type="button" className="btn btn-success" onClick={onSave}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default EditAssignmentForm;
