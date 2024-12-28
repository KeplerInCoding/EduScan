import React from 'react';

const FileUpload = ({ onFileSelect }) => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file); // Pass the selected file to the parent component
  };

  return (
    <div className="bg-purple-300 shadow-md rounded-lg p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Upload File</h2>
      <input 
        type="file" 
        accept="image/*,application/pdf" 
        onChange={handleFileChange} 
        className="border border-purple-600 rounded-lg w-full p-2 mb-4"
      />
    </div>
  );
};

export default FileUpload;
