import React from 'react';

import './NavBar.css'

function Navbar() {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/" to="/">wiseBiRD</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active navbaritem">
            <a className="nav-link text-white text-uppercase ml-5" href="/">Home</a>
          </li>
          <li className="nav-item navbaritem">
            <a className="nav-link text-white text-uppercase ml-5" href="/Courses" to="/Cards">Courses</a>
          </li>
          <li className="nav-item navbaritem">
            <a className="nav-link text-white text-uppercase ml-5" href="/Instructor" to="/Instructor">Instructors</a>
          </li>
          <li className="nav-item navbaritem">
            <a className="nav-link text-white text-uppercase ml-5" href="/Signup" to="/Signup">Sign Up</a>
          </li>
          <li className="nav-item navbaritem">
            <a className="nav-link text-white text-uppercase ml-5" href="/" to="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
	);
}

export default Navbar;