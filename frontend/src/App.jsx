import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './CustomNavbar';
import Cards from './Cards';
import Footer from './Footer';
import Instructor from './Instructor';
import About from './About';
import About2 from './About2';
import About3 from './About3';
import About4 from './About4';
import About5 from './About5';
import About6 from './About6';


class App extends Component {
	render() {
		return (
			<Router>
			
				<div>
					<Navbar />
					<Route exact path="/" component={Cards} />
					<Route path="/Instructor" component={Instructor} />
					<Route path="/About" component={About} />
					<Route path="/About2" component={About2} />
					<Route path="/About3" component={About3} />
					<Route path="/About4" component={About4} />
					<Route path="/About5" component={About5} />
					<Route path="/About6" component={About6} />
					<Footer />
					
				</div>
			</Router>
			
		);
	}
}

export default App;
