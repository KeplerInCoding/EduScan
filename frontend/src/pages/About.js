import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
            <h2 className="text-2xl font-bold mb-4">What is EduScan</h2>
            
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">What is the Purpose?</h3>
                <p className="text-gray-700 mb-2">
                    The purpose of this app is to replace traditional grading systems by automating the process of evaluating answer sheets. 
                    It aims to eliminate manual data entry, which is tedious, error-prone, and restricts the flow of information.
                </p>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">The Problems It Deals With:</h3>
                <p className="text-gray-700 mb-2">
                    The current scenario of traditional grading systems involves manual data entry of marks or grades obtained. 
                    Manual data entry is tedious, prone to errors, and stifles the flow of information. 
                    This app addresses these issues by automating the process of evaluating answer sheets, 
                    thus improving efficiency and accuracy in grading.
                </p>
            </div>
        </div>
  )
}

export default About