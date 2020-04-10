import React, { Component } from 'react';
import { Jumbotron, Container, Col, Image, Button } from 'react-bootstrap';

import './About.css';
import h3 from './h2.jpg';
import p2 from './p2.jpeg';

function About2() {
	return (
		
		<Container>
			<Jumbotron>
				<img src={h3} alt="" />
				
			</Jumbotron>
			<Col xs={14} sm={10} smoffset={2}>
					<Image src={p2} className="about-profile-pic" rounded />
					<h3>Frank the Tank</h3>
					<p>Frank is a professor in Pes UNiversity who teacher python programing language for 1st yr students.Machine learning may have enjoyed enormous success of late, but it is just one method for achieving artificial intelligence.

At the birth of the field of AI in the 1950s, AI was defined as any machine capable of performing a task that would typically require human intelligence.

AI systems will generally demonstrate at least some of the following traits: planning, learning, reasoning, problem solving, knowledge representation, perception, motion, and manipulation and, to a lesser extent, social intelligence and creativity.

Alongside machine learning, there are various other approaches used to build AI systems, including evolutionary computation, where algorithms undergo random mutations and combinations between generations in an attempt to "evolve" optimal solutions, and expert systems, where computers are programmed with rules that allow them to mimic the behavior of a human expert in a specific domain, for example an autopilot system flying a plane.

</p>
				</Col>
			</Container>
		
		
	);
}

export default About2;
