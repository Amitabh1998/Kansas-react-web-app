import { Link } from "react-router-dom";
import db from "../Database";
export default function Dashboard() {
  const courses = db.courses;
    return (
      <div id="wd-dashboard">
        <div className="ms-4">
  <h1 id="wd-dashboard-title">Dashboard</h1>
  <hr />
  <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
  <hr />
</div>

  <div id="wd-dashboard-courses" className="row" style={{ paddingLeft: '2rem' }}>
  <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.jpg" height="{160}" />
                  <div className="card-body">
                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                         {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

    {/* <div className="row row-cols-1 row-cols-md-5 g-5">
      <div className="wd-dashboard-course col mb-4" style={{ width: "300px" }}>
        <div className="card">
          <img src="/images/reactjs.jpg" width={200}/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>
      <div className="wd-dashboard-course col mb-4" style={{ width: "300px" }}>
      <div className="card">
          <img src="/images/reactjs.jpg" width={200}/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Machine Learning
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>

      </div>
      <div className="wd-dashboard-course col mb-4" style={{ width: "300px" }}>
      <div className="card">
          <img src="/images/reactjs.jpg" width={200}/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Deep Learning
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>

      </div>
      <div className="wd-dashboard-course col mb-4" style={{ width: "300px" }}>
      <div className="card">
          <img src="/images/reactjs.jpg" width={200}/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Deep Learning
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>
      <div className="wd-dashboard-course col mb-4" style={{ width: "300px" }}>
      <div className="card">
          <img src="/images/reactjs.jpg" width={200}/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Deep Learning
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>
      <div className="wd-dashboard-course col mb-4" style={{ width: "300px" }}>
      <div className="card">
          <img src="/images/reactjs.jpg" width={200}/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Deep Learning
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>
      <div className="wd-dashboard-course col mb-4" style={{ width: "300px" }}>
      <div className="card">
          <img src="/images/reactjs.jpg" width={200}/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Deep Learning
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>
      <div className="wd-dashboard-course col mb-4" style={{ width: "300px" }}>
      <div className="card">
          <img src="/images/reactjs.jpg" width={200}/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Deep Learning
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>
      <div className="wd-dashboard-course col mb-4" style={{ width: "300px" }}>
      <div className="card">
          <img src="/images/reactjs.jpg" width={200}/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
               href="#/Kanbas/Courses/1234/Home"
               style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                 CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Deep Learning
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
        </div>
      </div>
    </div>
  </div></div> */}
  