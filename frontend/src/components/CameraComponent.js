import React, { useEffect, useRef } from 'react';
import camera from './Camera'; // Assuming you have a camera utility module

const CameraComponent = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && canvasRef.current) {
      camera.startCamera(680, 480, videoRef.current, canvasRef.current);
    }

    return () => {
      camera.stopCamera();
    };
  }, []);

  const handleCapture = () => {
    const imageData = camera.takeSnapshot(); // Capture snapshot
    onCapture(imageData); // Pass image to parent component
  };

  return (
    <div className="camera-container">
      <video ref={videoRef} width="100%" height="auto" className="border border-purple-300 rounded-lg"></video>
      <button
        onClick={handleCapture}
        className="mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Capture Image
      </button>
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default CameraComponent;
