import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './About.css';
import h2 from '../images/h2.jpg';

function About(props) {
	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col xs={14} sm={10}>
					<img style={{display: "block", marginLeft: "auto", marginRight: "auto"}} src={h2} alt="" />
				</Col>
			</Row>
			<br/><br/><br/>
			<Row className="justify-content-md-center">
				<Col xs={14} sm={10}>
					<Image src={require('../images/'+props.location.imgSrc)} className="about-profile-pic" rounded />
					<h3>{props.location.name}</h3>
					<p>{props.location.desc}</p>
				</Col>
			</Row>
			</Container>
	);
}

export default About;