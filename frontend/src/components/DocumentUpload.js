import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../redux/actions/uploadActions';
import FileUpload from '../components/FileUpload';
import { toast } from 'react-toastify';
import DataTable from './DataTable';

const DocumentUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [extractedData, setExtractedData] = useState([]); // State to store extracted data
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.upload);

  const handleFileSelect = (file) => {
    console.log('File upload initiated', file);
    setUploadedFile(file);
  };

  const handleUpload = () => {
    if (uploadedFile) {
      dispatch(uploadImage(uploadedFile))
        .then((response) => {
          if (response.success) {
            toast.success(response.message || 'Upload successful!');
            // Update the extracted data state
            setExtractedData(response.data.extractedText || []);
          } else {
            toast.error(response.message || 'An error occurred.');
          }
        })
        .catch((err) => {
          // This will only be reached for unexpected errors not handled in the action
          toast.error('Failed to upload. Please try again.');
          console.error('Unexpected error:', err);
        });
    } else {
      toast.warn('No file selected!');
    }
  };

  return (
    <div className="w-full">
      <FileUpload onFileSelect={handleFileSelect} />

      {uploadedFile && (
        <div className="mt-4">
          <p className="text-green-600">Selected File: {uploadedFile.name}</p>
          <button
            onClick={handleUpload}
            disabled={loading}
            className={`bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Uploading...' : 'Upload File'}
          </button>
        </div>
      )}

      {/* Pass extracted data to the DataTable component */}
      {extractedData.length > 0 && (
        <div className="mt-6">
          <DataTable extractedText={extractedData} />
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
