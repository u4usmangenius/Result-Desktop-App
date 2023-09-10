import React from "react";
import { FaBell, FaSignOutAlt } from "react-icons/fa";
import "./TeacherHeader.css"
const TeachersHeader = () => {
  return (
    <div className="teachers-header">
      <div className="notification-icon-orange" style={{ marginRight: "10px" }}>
        <FaBell />
      </div>
      <div className="logout-button">
        Logout 
        <span className="logout-icon">

        <FaSignOutAlt />
        </span>
      </div>
    </div>
  );
};

export default TeachersHeader;
