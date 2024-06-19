import { useLocation, useParams } from "react-router";
import "./index.css";
import { Link } from "react-router-dom";

const CourseNavigation: React.FC = () => {
   const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
   const { courseId } = useParams<{ courseId: string }>();
   const { pathname } = useLocation();







// export default function CoursesNavigation() {
//    const { courseId } = useParams;
//    const { pathname } = useLocation();
//    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
   
  return (
   <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
        {links.map((link) => (
           <Link to={`${link}`}
              className={`list-group-item border-0 ${pathname.includes(link) ? "active text-black:" : "text-danger"}`}>
             {link}
         </Link>
        ))}
      </div>
  );
}
export default CourseNavigation;
