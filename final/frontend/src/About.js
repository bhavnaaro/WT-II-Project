import React from 'react';
import { Jumbotron, Container, Col, Image } from 'react-bootstrap';

import './About.css';
import h3 from './h2.jpg';

function About(props) {
	return (
		
		<Container>
			<Jumbotron>
				<img src={h3} alt="" />
				
			</Jumbotron>
			<Col xs={14} sm={10} smoffset={2}>
					<Image src={require('./'+props.location.imgSrc)} className="about-profile-pic" rounded />
					<h3>{props.location.name}</h3>
					<p>{props.location.desc}</p>
				</Col>
			</Container>
		
		
	);
}

export default About;
