import React from 'react';
import Button from '../components/Button'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-5xl font-extrabold mb-12 text-purple-600">Welcome to EduScan!</h1>
      <div className="flex gap-5">
        <Button text="Upload Documents" to="/getting-started" />
        <Button text="What is EduScan" to="/about" />
        <Button text="How to Use" to="/how-to-use" />
        <Button text="My Team" to="/team" />
        <Button text="Contact Us" to="/contact" />
      </div>
    </div>
  );
};

export default HomePage;
