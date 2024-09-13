import React, { useState } from 'react';

const FileUpload = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file); // Pass the selected file to the parent component
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Upload File</h2>
      <input 
        type="file" 
        accept="image/*,application/pdf" 
        onChange={handleFileChange} 
        className="border border-purple-400 rounded-lg w-full p-2 mb-4"
      />
      {selectedFile && (
        <p className="text-green-600">Selected File: {selectedFile.name}</p>
      )}
    </div>
  );
};

export default FileUpload;
