import React, { useState, useEffect, useRef } from "react";
import "./Dashboard.css";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { IoIosArrowDropdown } from 'react-icons/io';
import StudentProgressChart from "./StudentProgressChart";

import logo from "../../assests/logo.png";
const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown when clicking anywhere outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <div className="top-bar">
          <div className="top-left">
            <div className="search-bar">
              <div className="search-icon">
                <FaSearch />
              </div>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="top-right">
            <div
              className="notification-icon-orange"
              style={{ marginRight: "41px" }} // Add margin to the right
            >
              <FaBell />
            </div>
            <div
              className={`profile-icon ${isDropdownOpen ? "active" : ""}`}
              onClick={toggleDropdown}
            >
                <img src={logo} alt="Logo" className="logo" />
              <span className="profile-name">
                Usman Chaudhary 
                {/* &gt; */}
                <IoIosArrowDropdown/>                
              </span>
              <div
                ref={dropdownRef}
                className={`profile-dropdown ${isDropdownOpen ? "open" : ""}`}
              >
                <ul>
                  <li>
                    <FaUser />
                    Profile
                  </li>
                  <li>
                    <FaCog />
                    Settings
                  </li>
                  <li>
                    <FaSignOutAlt />
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-heading">
          <span className="selected-color">Dashboard</span>
          <span>&gt;</span>
          <span>Statistics</span>
        </div>

        <div className="cards-container">
          <div className="card">
            <div className="card-heading">Students</div>
            <div className="card-text">100</div>
            <div className="info-row">
              <div className="info-text">More Info</div>
              <div className="info-icon">
                <FaInfoCircle />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">Students</div>
            <div className="card-text">100</div>
            <div className="info-row">
              <div className="info-text">More Info</div>
              <div className="info-icon">
                <FaInfoCircle />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">Students</div>
            <div className="card-text">100</div>
            <div className="info-row">
              <div className="info-text">More Info</div>
              <div className="info-icon">
                <FaInfoCircle />
              </div>
            </div>
          </div>
        </div>
        <StudentProgressChart />

        {/* Rest of your dashboard content */}
      </div>
    </>
  );
};

export default Dashboard;
