import React from "react";
import StudentTable from "./StudentTable";
import "./App.css";
import studentList from "./studentList";

const App = () => {
  return (
    <div className="container">
      <h1>Student Grade Table</h1>
      <StudentTable studentList={studentList} />
    </div>
  );
};

export default App;
