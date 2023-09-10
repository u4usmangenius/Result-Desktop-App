import logo from "../../assests/logo.png"; // Replace with your logo image URL
import "./Sidebar.css";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaSchool,
  FaCog,
  FaUser,
  FaChartBar,
  FaStar,
} from "react-icons/fa"; // Import the necessary icons
import { AiFillHome } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="grid-container">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-heading">Result System</h1>
          {/* Result Database */}
        </div>
        <span className="sidebar-row"></span>
        <ul className="nav-ul">
          <li>
            <NavLink to="/sidebar/dashboard">
              <AiFillHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/sidebar/teachers">
              <FaChalkboardTeacher /> Teachers
            </NavLink>
          </li>
          <li>
            <NavLink to="/sidebar/students">
              <FaUserGraduate /> Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/sidebar/classes">
              <FaSchool /> Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/sidebar/settings">
              <FaCog /> Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/sidebar/profile">
              <FaUser /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/sidebar/report">
              <FaChartBar /> Report
            </NavLink>
          </li>{" "}
          <li>
            <NavLink id="features" to="/sidebar/features">
              <FaStar /> Features
              <div className="new-feature">NEW</div>
            </NavLink>
          </li>
        </ul>
        <div className="features">
          {/* <span className="features-label">Features</span>
           */}
        </div>
        {/* <div className="main-container"> */}
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
