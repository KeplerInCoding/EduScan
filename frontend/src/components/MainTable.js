import React, { useState } from 'react';
import StudentData from './StudentData'; // Import dummy data

const MainTable = ({ newStudent }) => {
  const [students, setStudents] = useState(StudentData); // Load initial data

  // Add new student to the table
  React.useEffect(() => {
    if (newStudent) {
      setStudents((prev) => [...prev, newStudent]);
    }
  }, [newStudent]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Students</h1>

      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Student Name</th>
            <th className="border border-gray-300 px-4 py-2">Roll Number</th>
            <th className="border border-gray-300 px-4 py-2">Marks</th>
            <th className="border border-gray-300 px-4 py-2">Total Marks</th>
            <th className="border border-gray-300 px-4 py-2">Subject</th>
            <th className="border border-gray-300 px-4 py-2">Question 1 Marks</th>
            <th className="border border-gray-300 px-4 py-2">Question 2 Marks</th>
            <th className="border border-gray-300 px-4 py-2">Question 3 Marks</th>
            <th className="border border-gray-300 px-4 py-2">Question 4 Marks</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border border-gray-300 px-4 py-2">{student.studentName}</td>
              <td className="border border-gray-300 px-4 py-2">{student.rollNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{student.marks}</td>
              <td className="border border-gray-300 px-4 py-2">{student.totalMarks}</td>
              <td className="border border-gray-300 px-4 py-2">{student.subject}</td>
              <td className="border border-gray-300 px-4 py-2">{student.question1Marks}</td>
              <td className="border border-gray-300 px-4 py-2">{student.question2Marks}</td>
              <td className="border border-gray-300 px-4 py-2">{student.question3Marks}</td>
              <td className="border border-gray-300 px-4 py-2">{student.question4Marks}</td>
              <td
                className={`border border-gray-300 px-4 py-2 font-bold ${
                  student.status === 'Valid' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {student.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
