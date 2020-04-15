import React, { Component } from 'react';
import './LogIn.css';
import {Container, Button} from 'react-bootstrap';

function SignUp() {
	return (
		<Container>
			<form>
				<h3>Sign Up</h3>
				<div className="form-group">
					<label>First name</label>
					<input type="text" className="form-control" placeholder="First Name" />
				</div>
				<div className="form-group">
					<label>Last name</label>
					<input type="text" className="form-control" placeholder="Last Name" />
				</div>
				<div className="form-group">
					<label>Email address</label>
					<input type="email" className="form-control" placeholder="Enter Email" />
				</div>
				<div className="form-group">
					<label>Email address</label>
					<input type="password" className="form-control" placeholder="Enter Password" />
				</div>
				<div className="form-group">
					<label>Email address</label>
					<input type="password" className="form-control" placeholder="Confirm Password" />
				</div>
				<Button type="submit" Style="primary">Sign Up</Button>
				<h3 className="forgot-password text-right">
					Already Registered <a href="/">Sign In?</a>
				</h3>
			</form> 
		</Container>
			
	);
}

export default SignUp;
