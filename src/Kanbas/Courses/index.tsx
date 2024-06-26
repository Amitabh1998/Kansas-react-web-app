import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Home from "./Home";
import { FaAlignJustify } from 'react-icons/fa';
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments";
import Grades from "./Grades";
import {courses} from "../Database";
import Zoom from "./Zoom";
export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  console.log(course);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" /> 
      {course && course.name}  &gt; {pathname.split("/")[4]}</h2>
      <hr />

      <div className="d-flex">
    <div className="d-none d-md-block">
      <CoursesNavigation />
    </div>
    <div className="flex-fill"><Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Zoom" element={<Zoom />} />
        <Route path="Assignments" element={<Assignments />} />
        <Route path="Grades" element={<Grades />} />
      </Routes>
      </div>
    </div>
    </div>
);}

  