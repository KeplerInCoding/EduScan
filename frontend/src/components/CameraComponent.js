import React, { useEffect, useRef, useState } from 'react';
import camera from './Camera'; // Import the camera module

const CameraComponent = ({ onCapture, onClose }) => {
  const videoRef = useRef(null); // Reference for video element
  const canvasRef = useRef(null); // Reference for canvas element
  const [capturedImage, setCapturedImage] = useState(null); // State to hold captured image


  useEffect(() => {
    // Start camera when the component mounts
    if (videoRef.current && canvasRef.current) {
      camera.startCamera(680, 480, videoRef.current, canvasRef.current);
    }

    // Cleanup camera when component unmounts
    return () => {
      camera.stopCamera();
    };
  }, []);

  const handleCapture = () => {
    const imageData = camera.takeSnapshot(); // Capture snapshot
    setCapturedImage(imageData); // Set captured image
    onCapture(imageData); // Pass image to parent component
  };

  return (
    <div className="camera-container">
      {!capturedImage ? (
        <div>
          {/* Video stream */}
          <video ref={videoRef} width="100%" height="auto" className="border border-purple-300 rounded-lg"></video>
          <button
            onClick={handleCapture}
            className="mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Capture Image
          </button>
        </div>
      ) : (
        <div>
          {/* Captured image preview */}
          <img src={capturedImage} alt="Captured Preview" className="w-full h-auto mb-2" />
        </div>
      )}

      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>

      <button
        onClick={onClose}
        className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300"
      >
        Close Camera
      </button>
    </div>
  );
};

export default CameraComponent;
