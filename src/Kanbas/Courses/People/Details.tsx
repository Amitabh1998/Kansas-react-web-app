import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck, FaPen } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import * as client from "./client";
import { useNavigate, useParams } from "react-router";

export default function PeopleDetails({ uid, onClose, fetchUsers }: 
{ uid: string; onClose: () => void; fetchUsers: () => void; }) {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const { cid } = useParams<{ cid: string }>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email || "");
    setRole(user.role || "");
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={onClose} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" />
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">
        {!editing && (
          <>
            <FaPen onClick={() => setEditing(true)} className="float-end fs-5 mt-2 wd-edit" />
            <div className="wd-name" onClick={() => setEditing(true)}>
              {user.firstName} {user.lastName}
            </div>
          </>
        )}
        {editing && (
          <>
            <FaCheck onClick={() => saveUser()} className="float-end fs-5 mt-2 me-2 wd-save" />
            <input
              className="form-control w-50 wd-edit-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveUser();
              }}
            />
          </>
        )}
      </div>
      <div className="mt-2">
        <b>Email:</b>
        {editing ? (
          <input
            type="email"
            className="form-control w-100 wd-edit-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <span className="wd-email">{user.email}</span>
        )}
      </div>
      <div className="mt-2">
        <b>Role:</b>
        {editing ? (
          <select
            className="form-select w-100 wd-edit-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="STUDENT">Student</option>
            <option value="TA">Assistant</option>
            <option value="FACULTY">Faculty</option>
          </select>
        ) : (
          <span className="wd-roles">{user.role}</span>
        )}
      </div>
      <div className="mt-2">
        <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
        <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
        <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
      </div>
      <hr />
      <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete">Delete</button>
      <button onClick={onClose} className="btn btn-secondary float-start me-2 wd-cancel">Cancel</button>
    </div>
  );
}
