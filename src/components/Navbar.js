import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-wrap place-content-evenly gap-10 py-2'>
        <Link to='/'><div className=' text-5xl font-extrabold text-purple-800'>EduCare</div></Link>
        <nav>
      <ul className='flex flex-wrap place-content-evenly gap-10 text-purple-800 text-2xl font-mono font-extrabold pl-10 '>
        <li>
          <NavLink className="hover:text-yellow-700" exact activeClassName="active" to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-yellow-700" activeClassName="active" to='/aboutus'>About Us</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-yellow-700" activeClassName="active" to='/getstarted'>Get Started</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-yellow-700" activeClassName="active" to='/contactus'>Contact Us</NavLink>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar