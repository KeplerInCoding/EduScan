import React, { useState } from 'react';

const Dashboard = () => {
    const [templateType, setTemplateType] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [section, setSection] = useState('');

    const handleScanDocument = () => {
        // Check if the browser supports mediaDevices and getUserMedia
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Access the camera
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    console.log('Camera access successful');
                    // Do something with the stream, such as displaying it in a video element
                })
                .catch((error) => {
                    console.error('Error accessing camera:', error);
                });
        } else {
            console.error('getUserMedia is not supported in this browser');
        }
    };
    

    const handleViewInfo = () => {
        // Open the Google Sheets document in a new tab/window
        window.open('https://docs.google.com/spreadsheets/d/1QTlcWgWp6hHzRo5gqG7acG3qT21unn1SxMc2b_ZNoCc/edit?usp=sharing', '_blank');
    };
    

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-rose-50 rounded-lg shadow-md font-extrabold flex flex-col gap-5">
            <h2 className="text-xl font-bold mb-4">Scan Document Form</h2>
            <div className="mb-4">
                <label htmlFor="templateType" className="block text-sm font-medium text-gray-700">EXAM</label>
                <select
                    id="templateType"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                    value={templateType}
                    onChange={(e) => setTemplateType(e.target.value)}
                >
                    <option value="">Select Exam</option>
                    <option value="CT1">CT1</option>
                    <option value="CT2">CT2</option>
                    <option value="PUE">PUE</option>
                    <option value="UE">UE</option>
                </select>
            </div>
            {/* Year Dropdown */}
            <div className="mb-4">
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">YEAR</label>
                <select
                    id="year"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                >
                    <option value="">Select Year</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                </select>
            </div>
            {/* Branch Dropdown */}
            <div className="mb-4">
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700">BRANCH</label>
                <select
                    id="branch"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                >
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="CSIT">CSIT</option>
                    <option value="CS">CS</option>
                    <option value="CSAIML">CSAIML</option>
                    <option value="IT">IT</option>
                </select>
            </div>
            {/* Section Dropdown */}
            <div className="mb-4">
                <label htmlFor="section" className="block text-sm font-medium text-gray-700">SECTION</label>
                <select
                    id="section"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                >
                    <option value="">Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </div>
            <button className="bg-rose-600 text-white px-4 py-2 rounded-md" onClick={handleScanDocument}>Scan Document</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md" onClick={handleViewInfo}>View Extracted Information</button>
        </div>
    );
};

export default Dashboard;
