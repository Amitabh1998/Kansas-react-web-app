import { useLocation, useParams } from "react-router";
import "./index.css";
import { Link } from "react-router-dom";

const CourseNavigation: React.FC = () => {
   const { pathname } = useLocation();
   const {cid} = useParams();
   const links = [
      { label: "Home", path: "/Kanbas/Courses/" + cid + "/Home" },
      { label: "Modules", path: "/Kanbas/Courses/" + cid + "/Modules" },
      { label: "Piazza", path: "/Kanbas/Courses/" + cid + "/Piazza" },
      { label: "Zoom", path: "/Kanbas/Courses/" + cid + "/Zoom" },
      { label: "Assignments", path: "/Kanbas/Courses/" + cid + "/Assignments" },
      { label: "Quizzes", path: "/Kanbas/Courses/" + cid + "/Quizzes" },
      { label: "Grades", path: "/Kanbas/Courses/" + cid + "/Grades" },
  ];
   
   return (
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
         {links.map((link, idx) => (
<Link key={`${link.path}-${idx}`} to={link.path} className={`list-group-item p-2 ${pathname.includes(link.label) ? "active" : "text-danger"}`}>
               {link.label}</Link>
         ))}
      </div>
   );
}
export default CourseNavigation;
