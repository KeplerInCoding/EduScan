import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Button.css'; // Import the CSS file for additional styling

const Button = ({ text, to }) => {
  return (
    <Link to={to} className="relative inline-block">
      <button
        className="relative px-6 py-5 text-lg font-extrabold text-purple-600 border-2 border-purple-600 bg-pink-200 transition-transform transform hover:text-white"
      >
        <span className="relative z-10">{text}</span>
        <div className="absolute inset-0 border-4 border-purple-300 bg-purple-100 rotate-12 transform origin-center -z-10"></div>
      </button>
    </Link>
  );
};

export default Button;
