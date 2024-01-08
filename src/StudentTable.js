import React from "react";
import PropTypes from "prop-types";
import Student from "./Student";

const StudentTable = ({ studentList }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Class</th>
            <th>Math</th>
            <th>Literature</th>
            <th>Physics</th>
            <th>Chemistry</th>
            <th>Geography</th>
            <th>History</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <Student key={index} studentData={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
StudentTable.propTypes = {
  studentList: PropTypes.arrayOf(
    PropTypes.shape({
      student_id: PropTypes.number,
      student_name: PropTypes.string,
      student_lastName: PropTypes.string,
      grades: PropTypes.shape({
        math: PropTypes.number,
        literature: PropTypes.number,
        physics: PropTypes.number,
        chemistry: PropTypes.number,
        geography: PropTypes.number,
        history: PropTypes.number,
      }),
      class: PropTypes.number,
    })
  ).isRequired,
};

export default StudentTable;
