import React, { useState } from 'react';
import Button from './Button';
import { toast } from 'react-toastify';
import MainTable from './MainTable';

const DataTable = ({ extractedText }) => {

  const [newStudent, setNewStudent] = useState(null); 

  const onUpload = () => {
    if (extractedText.length > 0) {
      const formattedStudent = extractedText.reduce((acc, item) => {
        acc[item.field] = item.value;
        return acc;
      }, {});

      setNewStudent(formattedStudent); // Pass new student to MainTable
      toast.success('Student added successfully!');
    } else {
      toast.error('No data to upload!');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Extracted Data</h1>

      {/* Table */}
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Field</th>
            <th className="border border-gray-300 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {extractedText.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.field}</td>
              <td className="border border-gray-300 px-4 py-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button */}
      <div className="my-10 flex justify-center">
        <Button text={"Upload Data ->"} onClick={onUpload} />
      </div>

      {/* Main Table */}
      <div className="mt-10">
        <MainTable newStudent={newStudent} />
      </div>
    </div>
  );
};

export default DataTable;