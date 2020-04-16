import React, { Component } from 'react';
import './LogIn.css';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios'

class SignUp extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		id: ''
	};


	handleSubmit = event => {
		event.preventDefault();
		const student = {
			"studentName": this.state.name,
			"email": this.state.email,
			"password": this.state.password,
			"studentID": this.state.id,
			"course": [],
			"userType": 'student'

		}
		console.log(student);
		axios.post('http://localhost:5000/student/add', student)
			.then(res => {
				console.log(res);
				console.log(res.data);
				//window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
			}).catch(function (error) {
				console.log(error);
			});
	}
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}
	render() {
		return (
			<Container>

				<form onSubmit={this.handleSubmit}>


					<h3>Sign Up</h3>
					<div className="form-group">
						<label>StudentID</label>
						<input type="text" className="form-control" placeholder="ID" name="id" onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control" placeholder="Name" name="name" onChange={this.handleChange} />
					</div>

					<div className="form-group">
						<label>Email address</label>
						<input type="email" className="form-control" placeholder="Enter Email" name="email" onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" placeholder="Enter Password" name="password" onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label>confirm Password</label>
						<input type="password" className="form-control" placeholder="Confirm Password" name="pwd" />
					</div>
					<Button type="submit" Style="primary">Sign Up</Button>
					<h3 className="forgot-password text-right">
						Already Registered <a href="/Login" to="/Login">Sign In?</a>
					</h3>



					{/* <button type="submit"> Add </button> */}
				</form>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</Container>
		);
	}
}



// function SignUp() {
// 	return (
// 		<Container>
// 			<form>




// 	);
// }

export default SignUp;
