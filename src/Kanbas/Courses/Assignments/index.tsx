import React, { useEffect } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
// import * as db from '../../Database';
import * as client from "./client";
import { BsFileEarmarkText, BsGripVertical, BsSearch } from 'react-icons/bs';
import { FaPlus, FaTrash } from 'react-icons/fa';
import './index.css';
import ModuleControlButtons from '../Modules/ModuleControlButtons';
import EditorPage from './EditorPage/EditorPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './AssignmentList/AssignmentList';
import { deleteAssignment, setAssignments, addAssignment, updateAssignment  } from './reducer';

export default function Assignments() {
const navigate = useNavigate()
  return (
    <Routes>
      <Route index element={<AssignmentsList />} />
      <Route path='/:assignmentId/edit' element={<EditorPage onClose={() => navigate(-1)} />} />
      <Route path='/:assignmentId' element={<EditorPage onClose={() => navigate(-1)} />} />
    </Routes>
  )
}

const AssignmentsList = () => { 
  const { cid } = useParams();
  const dispatch = useDispatch();
  // const filteredAssignments = db.assignments.filter(assign => assign.course === cid);
  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);
  const filteredAssignments = assignments.filter(assign => assign.course === cid);

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
 
  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };


  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments" className="ms-5">
      <div className="wd-flex-row-container justify-content-between">
        <div className="wd-flex-row-container">
          <BsSearch className="position-absolute float-start mt-3 ms-3" />
          <input
            id="wd-search-assignment"
            placeholder="      Search"
            className=""
            style={{ fontSize: '20px', width: '250px', height: '40px', borderRadius: '4px', borderColor: '#ECECEC' }}
          />
        </div>
        <div className="wd-flex-row-container float-end me-5">
          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end" type="button" style={{ color: 'black', backgroundColor: '#F5F5F5' }}>
            <FaPlus className="position-relative me-2 mb-1" style={{ color: 'black' }} />
            Group
          </button>
          <Link to="new">
            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-8 float-end">
              <FaPlus className="position-relative me-2 mb-1" style={{ color: '#FAFAFA' }} />
              Assignment
            </button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">

        <li className="wd-assignment-list-module wd-module list-group-item p-0 mb-5 fs-5" style={{ width: '80%' }}>
          <div className="wd-title p-3 ps-2 pt-4 pb-4" style={{ backgroundColor: '#F5F5F5', borderColor: '#ECECEC' }}>
            <BsGripVertical className="me-2 fs-3" />
            <b style={{ color: 'black' }}> ASSIGNMENTS</b>
            
          </div>
          <ul className="wd-assignment-list-items wd-lessons list-group rounded-0">
            {filteredAssignments.map((assignment) => (
              <Link key={assignment._id} to={`${assignment._id}/edit`}>
              <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1" style={{ borderLeftWidth: '4px', borderLeftColor: 'green' }}>
                <div className="wd-flex-row-container">
                  <BsGripVertical className="me-2 fs-3 ms-1 mt-4" />
                  <BsFileEarmarkText size={30} className="ms-1 mt-4" style={{ float: 'right', color: 'green' }} />
                  <div className="ms-3 me-5" style={{ fontSize: '18px', marginTop: '-30px' }}>
                    {/* <Link key={`${assignment.course}/${assignment._id}`} to={`${assignment.course}/${assignment._id}`} className="wd-assignment-link" style={{ color: 'black', textDecoration: 'none' }}> */}
                      <br />
                      <b>{assignment.title}</b>
                    {/* </Link> */}
                    <br />
                    <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                    
                  </div>
                  <FaTrash className="text-danger" 
                  onClick={e => {
                    e.stopPropagation();
                    e.preventDefault() 
                    console.log("DEBUG check",assignment._id );
                    // dispatch(deleteAssignment(assignment._id));
                    removeAssignment(assignment._id)
                    }} />
                  {/* <ModuleControlButtons moduleId={} /> */}
                </div>
              </li>
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}