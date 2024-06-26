import React from 'react';
import { Link, useParams } from 'react-router-dom';
import * as db from '../../Database';
import { BsFileEarmarkText, BsGripVertical, BsSearch } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import './index.css';
import LessonControlButtons from '../Modules/LessonControlButtons';


export default function Assignments() {
  const { cid } = useParams();
  const filteredAssignments = db.assignments.filter(assign => assign.course === cid);

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
          <Link to="EditorPage ">
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
              <li key={assignment._id} className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1" style={{ borderLeftWidth: '4px', borderLeftColor: 'green' }}>
                <div className="wd-flex-row-container">
                  <BsGripVertical className="me-2 fs-3 ms-1 mt-4" />
                  <BsFileEarmarkText size={30} className="ms-1 mt-4" style={{ float: 'right', color: 'green' }} />
                  <div className="ms-3 me-5" style={{ fontSize: '18px', marginTop: '-30px' }}>
                    <Link key={`${assignment.course}/${assignment._id}`} to={`${assignment.course}/${assignment._id}`} className="wd-assignment-link" style={{ color: 'black', textDecoration: 'none' }}>
                      <br />
                      <b>{assignment.title}</b>
                    </Link>
                    <br />
                    <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                  <LessonControlButtons />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}