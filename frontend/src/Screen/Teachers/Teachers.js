import React from "react";
import "./Teacher.css";
import TeachersHeader from "./TeacherHeader";
const Teachers = () => {
  return (
    <>
      {/* Use the TeachersHeader component here */}
      <TeachersHeader/>
      <div className="teachers-container">
        <div className="teachers-header-row">
          <h1>Teachers</h1>
          <button className="add-teachers-button">Add Teachers</button>
        </div>
        {/* Rest of your content */}
      </div>
    </>
  );
};

export default Teachers;
