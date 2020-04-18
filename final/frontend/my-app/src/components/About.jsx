import React from 'react';
import { Jumbotron, Container, Col, Image } from 'react-bootstrap';

import './About.css';
import h2 from '../images/h2.jpg';

function About(props) {
	return (
		<Container>
			<Jumbotron style={{padding:0, backgroundColor: "#141415"}}>
				<img style={{display: "block", marginLeft: "auto", marginRight: "auto"}} src={h2} alt="" />
			</Jumbotron>
			<Col xs={14} sm={10} smoffset={2}>
				<Image src={require('../images/'+props.location.imgSrc)} className="about-profile-pic" rounded />
				<h3>{props.location.name}</h3>
				<p>{props.location.desc}</p>
			</Col>
			</Container>
	);
}

export default About;