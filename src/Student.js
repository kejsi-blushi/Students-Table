import PropTypes from "prop-types";
import React from "react";

const Student = ({ studentData }) => {
  const { student_name, student_lastName, grades, student_class } = studentData;

  const calculateAverageGrade = () => {
    const totalSubjects = Object.keys(grades).length;

    const totalGrade = Object.values(grades).reduce(
      (accumulator, grade) => accumulator + grade,
      0
    );
    const average = totalGrade / totalSubjects;
    return average.toFixed(2);
  };

  const handleDisplayAverageGrade = () => {
    const averageGrade = calculateAverageGrade();
    alert(`${student_name}'s average grade is ${averageGrade}`);
  };

  return (
    <tr>
      <td>{student_name}</td>
      <td>{student_lastName}</td>
      <td>{student_class}</td>
      {Object.values(grades).map((grade, index) => (
        <td key={index}>{grade}</td>
      ))}
      <td>
        <button onClick={handleDisplayAverageGrade}>Display Grade</button>
      </td>
    </tr>
  );
};

Student.propTypes = {
  studentData: PropTypes.string.isRequired,
};

Student.propTypes = {
  studentData: PropTypes.shape({
    student_name: PropTypes.string.isRequired,
    student_lastName: PropTypes.string.isRequired,
    grades: PropTypes.object.isRequired,
    class: PropTypes.number.isRequired,
  }).isRequired,
  displayAverageGrade: PropTypes.func.isRequired,
};

export default Student;
