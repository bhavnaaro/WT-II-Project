import React, { Component } from 'react';
import { Jumbotron, Container, Image } from 'react-bootstrap';
import './Background.css'

function Background() {
	return (
		<Container>
			<Jumbotron>
				<Image src="h.jpg" />
				
				<h2>Welcome</h2>
				<p>	Hello</p>
			</Jumbotron>
		</Container>
	);
}
export default Background;
