import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import h3 from './h3.jpg';
import p1 from './p1.jpg';
import p2 from './p2.jpeg';
import p3 from './p3.png';
import p4 from './p4.jpeg';
import p5 from './p5.jpeg';
import p6 from './p6.jpg';

import './Instructor.css';
import About from './About';
import About2 from './About2';
import About3 from './About3';
import About4 from './About4';
import About5 from './About5';
import About6 from './About6';

function Instructor() {
	return (
		<Container>
			<Jumbotron>
				<img src={h3} alt="" />
				
			</Jumbotron>
			
			<h1 className="show-grid text-center">Our Instructors !! </h1>
			
			<Row className="show-grid text-center">
				<Col xs={12} sm={4} className="person-wrapper">
					<Image className="profile-pic" src={p1} roundedCircle />
					<h3>Frank</h3>
					<p>Hii there</p>
					<Link to="/About">
						<Button Style="primary">About</Button>
					</Link>
				</Col>
				<Col xs={12} sm={4} className="person-wrapper">
					<Image src={p2} roundedCircle className="profile-pic" />
					<h3>Frank</h3>
					<p>Hii there</p>
					<Link to="/About2">
						<Button Style="primary">About</Button>
					</Link>
				</Col>
				<Col xs={12} sm={4} className="person-wrapper">
					<Image src={p3} roundedCircle className="profile-pic" />
					<h3>Frank</h3>
					<p>Hii there</p>
					<Link to="/About3">
						<Button Style="primary">About</Button>
					</Link>
				</Col>
			</Row>
			<Row className="show-grid text-center">
				<Col xs={12} sm={4} className="person-wrapper">
					<Image src={p4} roundedCircle className="profile-pic" />
					<h3>Frank</h3>
					<p>Hii there</p>
					<Link to="/About4">
						<Button Style="primary">About</Button>
					</Link>
				</Col>
				<Col xs={12} sm={4} className="person-wrapper">
					<Image src={p5} roundedCircle className="profile-pic" />
					<h3>Frank</h3>
					<p>Hii there</p>
					<Link to="/About5">
						<Button Style="primary">About</Button>
					</Link>
				</Col>
				<Col xs={12} sm={4} className="person-wrapper">
					<Image src={p6} roundedCircle className="profile-pic" />
					<h3>Frank</h3>
					<p>Hii there</p>
					<Link to="/About6">
						<Button Style="primary">About</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}
 
export default Instructor;
