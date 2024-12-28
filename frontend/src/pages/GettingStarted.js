import React, { useState } from 'react';
import { FaFileUpload, FaCamera } from 'react-icons/fa';
import DocumentUpload from '../components/DocumentUpload';
import CameraSection from '../components/CameraSection';

const GettingStarted = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 for Document Upload, 1 for Camera

  return (
    <div className="flex flex-col items-center min-h-screen pt-20 p-8">
      {/* Tab buttons */}
      <div className="flex space-x-8 mb-8">
        <button
          onClick={() => setActiveTab(0)}
          className={`flex items-center px-4 py-2 border-b-2 ${activeTab === 0 ? 'border-purple-600 text-purple-600' : 'border-gray-300 text-gray-500'} hover:text-purple-600 hover:border-purple-600 transition`}
        >
          <FaFileUpload className="mr-2" />
          Document Upload
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`flex items-center px-4 py-2 border-b-2 ${activeTab === 1 ? 'border-purple-600 text-purple-600' : 'border-gray-300 text-gray-500'} hover:text-purple-600 hover:border-purple-600 transition`}
        >
          <FaCamera className="mr-2" />
          Camera
        </button>
      </div>

      {/* Conditional rendering based on activeTab */}
      <div className="w-full">
        {activeTab === 0 ? <DocumentUpload /> : <CameraSection />}
      </div>
    </div>
  );
};

export default GettingStarted;
