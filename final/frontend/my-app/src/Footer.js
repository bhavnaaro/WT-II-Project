import React, { Component } from 'react';
import {Link}  from 'react-router';

function Footer() {
	return(
	<footer className="footer-bottom-fixed py-5 bg-dark">
    <div className="container">
      <form className="form-inline ml-2 my-lg-0">
      
          {/* <Link to="http://localhost:8080" className="btn btn-outline-success ml-sm-2">Chat with us</Link> */}
          <a href="http://localhost:8080" className="btn btn-outline-success ml-sm-2">Chat with us</a>
    </form>
    </div>
   
  </footer>
	);
}
export default Footer;
