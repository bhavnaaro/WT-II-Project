import React, { Component } from 'react';
import Instructor from './Instructor';
import Cards from './Cards'; 
import Signup from './SignUp';


function Navbar() {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="#">Online Learning Portal</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link text-white text-uppercase ml-5" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-uppercase ml-5" href="/Instructor" to="/Instructor">Instructor</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-uppercase ml-5" href="/Courses" to="/Cards">Courses <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-uppercase ml-5" href="#">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-uppercase ml-5" href="/Signup" to="/Signup">Signup</a>
      </li>
      
    </ul>
    
  </div>
</nav>
	);	
}

export default Navbar;
