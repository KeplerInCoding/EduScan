import React, { useState } from 'react';
import CameraComponent from '../components/CameraComponent';

const GettingStarted = () => {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = (image) => {
    setCapturedImage(image); // Store the captured image
  };

  const handleUpload = () => {
    if (capturedImage) {
      // Upload the captured image (send to backend, etc.)
      console.log('Image to upload:', capturedImage);
    }
  };

  return (
    <div className="container mt-20">
      <button onClick={() => setCameraOpen(true)}>Open Camera</button>

      {cameraOpen && (
        <CameraComponent onCapture={handleCapture} onClose={() => setCameraOpen(false)} />
      )}

      {capturedImage && (
        <div>
          <img src={capturedImage} alt="Captured" />
          <button onClick={handleUpload}>Upload Image</button>
        </div>
      )}
    </div>
  );
};

export default GettingStarted;
