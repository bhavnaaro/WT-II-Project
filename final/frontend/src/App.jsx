import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './CustomNavbar';
import Cards from './Cards';
import Footer from './Footer';
import Instructor from './Instructor';
import About from './About';
import Login from './Login';
import Signup from './Signup';


class App extends Component {
	render() {
		return (
			<Router>
			
				<div>
					<Navbar />
					<Route exact path="/" component={Cards} />
					<Route path="/Instructor" component={Instructor} />
					<Route path="/About" component={About} />
					<Route path="/Login" component={Login} />
					<Route path="/Signup" component={Signup} />
					<Footer />
					
				</div>
			</Router>
			
		);
	}
}

export default App;
