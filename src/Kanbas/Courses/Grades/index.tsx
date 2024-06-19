import React from 'react';
import { FaFileImport, FaFileExport } from 'react-icons/fa';

export default function Grades() {

  return (
    <div className="container mt-4">
      <h2>Grades</h2>
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search for Student Names" />
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search for Assignment Names" />
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary me-2">
            <FaFileImport className="me-1" />
            Import
          </button>
          <div className="dropdown d-inline">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <FaFileExport className="me-1" />
              Export
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
              <li><a className="dropdown-item" href="#">Option 3</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student Name</th>
              <th scope="col">Assignment Name</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Student 1</td>
              <td>Assignment 1</td>
              <td><input type="text" className="form-control" defaultValue="95" /></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Student 2</td>
              <td>Assignment 2</td>
              <td>90</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Student 3</td>
              <td>Assignment 3</td>
              <td>85</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
