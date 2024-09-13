import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../redux/actions/uploadActions';
import CameraComponent from '../components/Camera';

const GettingStarted = () => {
  const dispatch = useDispatch();
  const { uploadedImage, loading, error } = useSelector((state) => state.upload);

  const [selectedFile, setSelectedFile] = useState(null); // Handle file upload
  const [capturedImage, setCapturedImage] = useState(null); // Handle captured image
  const [cameraOpen, setCameraOpen] = useState(false); // Toggle camera

  // Handle image captured from camera
  const handleCapture = (blob) => {
    const imageFile = new File([blob], 'captured_image.png', { type: 'image/png' });
    setCapturedImage(imageFile); // Store captured image
    setCameraOpen(false); // Close camera after capture
  };

  // Submit captured or selected file to Redux action
  const handleUpload = () => {
    const imageToUpload = capturedImage || selectedFile;
    if (imageToUpload) {
      dispatch(uploadImage(imageToUpload));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">Getting Started</h1>

      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* File Upload Section */}
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Picture or PDF
        </label>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="w-full mb-4 p-2 border border-purple-400 rounded-lg"
        />

        {/* Camera Controls */}
        <button
          onClick={() => setCameraOpen(!cameraOpen)}
          className="w-full mb-4 bg-transparent border border-purple-500 text-purple-500 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300"
        >
          {cameraOpen ? "Close Camera" : "Open Camera"}
        </button>

        {/* Camera Component */}
        {cameraOpen && (
          <CameraComponent onCapture={handleCapture} onClose={() => setCameraOpen(false)} />
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={loading || (!selectedFile && !capturedImage)}
          className={`w-full py-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        {/* Display Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Display Uploaded Image */}
        {uploadedImage && (
          <div className="mt-4">
            <h3 className="text-green-500">Upload Successful</h3>
            <img src={uploadedImage.url} alt="Uploaded" className="mt-2 w-full h-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default GettingStarted;
