import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../redux/actions/uploadActions';
import CameraComponent from '../components/CameraComponent';

const CameraSection = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.upload);

  const handleCapture = (image) => {
    setCapturedImage(image);
  };

  const handleUpload = () => {
    if (capturedImage) {
      dispatch(uploadImage(capturedImage));
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <CameraComponent onCapture={handleCapture} />

      {capturedImage && (
        <div className="mt-4">
          <img src={capturedImage} alt="Captured" className="mb-4 border border-gray-300 rounded-lg" />
          <button
            onClick={handleUpload}
            disabled={loading}
            className={`bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Uploading...' : 'Upload Image'}
          </button>
        </div>
      )}

      {error && <p className="text-red-600 mt-4">{error}</p>}
      {success && <p className="text-green-600 mt-4">Upload successful!</p>}
    </div>
  );
};

export default CameraSection;
