import React, { useState } from 'react';

const Dashboard = () => {
    const [templateType, setTemplateType] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [section, setSection] = useState('');

    const handleScanDocument = () => {
        // Function to open camera and scan document
        console.log('Opening camera to scan document...');
    };

    const handleViewInfo = () => {
        // Redirect to the Excel sheet with extracted information
        window.location.href = 'path_to_excel_sheet';
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
