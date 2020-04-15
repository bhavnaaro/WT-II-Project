import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './CustomNavbar';
import Cards from './Cards';
import Footer from './Footer';
import Instructor from './Instructor';
import About from './About';


class App extends Component {
	render() {
		return (
			<Router>
			
				<div>
					<Navbar />
					<Route exact path="/" component={Cards} />
					<Route path="/Instructor" component={Instructor} />
					<Route path="/About" component={About} />
					<Footer />
					
				</div>
			</Router>
			
		);
	}
}

export default App;
