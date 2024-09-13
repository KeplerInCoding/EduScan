import React, { useState } from 'react';
import CameraComponent from '../components/CameraComponent';
import FileUpload from '../components/FileUpload';

const GettingStarted = () => {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleCapture = (image) => {
    setCapturedImage(image); // Store the captured image
  };

  const handleFileSelect = (file) => {
    setUploadedFile(file); // Store the uploaded file
  };

  const handleUpload = () => {
    if (capturedImage) {
      console.log('Captured image to upload:', capturedImage);
    }
    if (uploadedFile) {
      console.log('Uploaded file:', uploadedFile);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 pt-20 p-8">
      {/* Left side: File Upload */}
      <div className="w-1/2 pr-4">
        <FileUpload onFileSelect={handleFileSelect} />
      </div>

      {/* Right side: Camera Component */}
      <div className="w-1/2 pl-4 flex flex-col items-center">
        <button
          onClick={() => setCameraOpen(true)}
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition mb-4"
        >
          Open Camera
        </button>

        {cameraOpen && (
          <CameraComponent onCapture={handleCapture} onClose={() => setCameraOpen(false)} />
        )}

        {capturedImage && (
          <div className="mt-4">
            <img src={capturedImage} alt="Captured" className="mb-4 border border-gray-300 rounded-lg" />
            <button
              onClick={handleUpload}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              Upload Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GettingStarted;
