import React, { Component } from 'react';
import './LogIn.css';
import { Container, Button } from 'react-bootstrap';

function Login() {
	return (
		<Container>
			<form>
				<h3>Sign In</h3>
				<div className="form-group">
					<label>Email address</label>
					<input type="email" className="form-control" placeholder="Enter email id" />
				</div>
				<div ClassName="form-group">
					<label>Password</label>
					<input type="password" className="form-control" placeholder="Enter password" />
				</div>
				<div className="form-group">
					<div className="custom-control custom-checkbox">
						<input type="checkbox" className="custom-control-input" id="customCheck1" />
						<label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
					</div>
				</div>
				<Button type="submit" Style="primary">Submit</Button>
				{/* <p className="forget-password text-right">
					Forgot<a href="/">password?</a>
				</p> */}
			</form>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</Container>
	);
}

export default Login;
