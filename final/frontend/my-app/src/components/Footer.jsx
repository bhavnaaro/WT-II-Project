import React from 'react';

function Footer() {
	return(
    <footer className="footer-bottom-fixed py-5">
      <div className="container">
        <form className="form-inline ml-2 my-lg-0">
          <a href="http://localhost:8080" className="btn btn-outline-success ml-sm-2">Chat with us</a>
        </form>
      </div>
    </footer>
	);
}

export default Footer;