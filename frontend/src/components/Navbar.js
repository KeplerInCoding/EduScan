import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { KeyIcon } from '@heroicons/react/24/outline';
import './Button.css'; // Make sure this is the correct path to your CSS file

const Navbar = () => {
  return (
    <div className='flex flex-wrap place-content-evenly gap-5 py-2 fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50'>
      <Link to='/'>
        <div className='text-5xl font-extrabold text-purple-600'>EduScan</div>
      </Link>
      <NavLink className="nav-link hover:text-white text-purple-600 text-2xl font-mono font-extrabold" exact to='/'>Home</NavLink>
      <Link to='/login'>
              <KeyIcon className='h-8 w-8 nav-link text-purple-600' />
      </Link>
      
    </div>
  );
};

export default Navbar;
