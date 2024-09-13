import React, { useRef, useState, useEffect } from 'react';

const CameraComponent = ({ onCapture, onClose }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [preview, setPreview] = useState(null); // Preview captured image

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera(); // Stop camera when component unmounts
    };
  }, []);

  // Start the camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play(); // Ensure the video plays
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Error accessing the camera. Please ensure camera permissions are enabled.');
    }
  };

  // Stop the camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  // Capture the image from the video stream
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Convert canvas to image
    canvas.toBlob((blob) => {
      const imageUrl = URL.createObjectURL(blob);
      setPreview(imageUrl); // Set preview of captured image
      onCapture(blob); // Pass captured image blob to parent component
      stopCamera(); // Stop camera after capturing
    }, 'image/png');
  };

  // Retake the image by clearing the preview and restarting the camera
  const retakeImage = () => {
    setPreview(null); // Clear preview
    startCamera(); // Restart camera
  };

  return (
    <div className="camera-container">
      {!preview ? (
        <div>
          {/* Camera stream */}
          <video ref={videoRef} width="100%" height="auto" className="border border-purple-300 rounded-lg"></video>
          <button
            onClick={captureImage}
            className="mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Capture Image
          </button>
        </div>
      ) : (
        <div>
          {/* Captured image preview */}
          <img src={preview} alt="Captured Preview" className="w-full h-auto mb-2" />
          <button
            onClick={retakeImage}
            className="w-full mb-4 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Retake Image
          </button>
        </div>
      )}

      {/* Hidden canvas used to capture the video frame */}
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default CameraComponent;
