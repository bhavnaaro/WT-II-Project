import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './CustomNavbar';
import Background from './Background';
import Cards from './Cards';


class App extends Component {
	render() {
		return (
			
				<div>
					<Navbar />
					<Background />
					<Cards />
					
				</div>
			
		);
	}
}

export default App;
