import React from 'react';
import Button from '../components/Button'
import imag1 from "../images/homePageBG9.jpeg";
import imag2 from "../images/homePageBG.jpeg";
import imag3 from "../images/homePageBG1.jpeg";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center md:p-10">
      
      {/* image  */}
      <div className='relative flex items-center justify-center gap-5'>
      <h1 className="absolute p-10 bg-white/60 backdrop-blur-sm text-5xl font-extrabold mb-12 text-purple-600">Welcome to EduScan!</h1>
        <div><img src={imag1} alt="AI"/></div>
        <div><img src={imag2} alt="AI"/></div>
        <div><img src={imag3} alt="AI"/></div>
      </div>
      
      <div className="flex gap-5 mt-10">
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
