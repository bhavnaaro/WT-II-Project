import React from 'react';
import { Container, Jumbotron, Row, Col} from 'react-bootstrap';
import InstrucCard from './InstrucCard'

import h3 from './h3.jpg';

import './Instructor.css';



function Instructor() {
	var no_of_instr = 0;
	var imgs = []
	var names = []
	var shortDescs = []
	var longDescs = []
	
	var i, j;

	//console.log("@@@@@@@@@@@@@@@@@@@HELLO");
	function myFunction(item, index) {
		imgs.push(item['img']);
		names.push(item['instructorName'])

		shortDescs.push(item['shortDescs']);
		longDescs.push(item['longDescs']);
	}

	const axios = require("axios");
	var url = "http://localhost:5000/instructor/all";
	axios.get(url)
		.then((response) => {
			var allInstructorData = response.data;
			console.log("_________________________________________________", allInstructorData);
			// console.log(response.data.explanation);
			allInstructorData.forEach(myFunction);
			no_of_instr = allInstructorData.length;
			console.log("@@@@@", names.length);
			 
			 // console.log(imgs,shortDescs,longDescs,names);
		})
		.catch((error) => {
			console.log(error);
		}).finally(() => {
			console.log("i should go second",names.length);
		});



console.log(imgs, shortDescs, longDescs, names,names[0],typeof(names),names.length);

	// var imgs = ['p1.jpg', 'p2.jpeg', 'p3.png', 'p4.jpeg', 'p5.jpeg', 'p6.jpg']
	// var names = []
	// for (i = 0; i < 6; i++) {
	// 	names.push('Frank');
	// }
	// var shortDescs = []
	// for (i = 0; i < 6; i++) {
	// 	shortDescs.push('Machine Learning, Data Science, Image Processing, Natural Language Processing');
	// }
	// var longDescs = []
	// for (i = 0; i < 6; i++) {
	// 	longDescs.push("Frank is a professor in Pes UNiversity who teacher python programing language for 1st yr students.Machine learning may have enjoyed enormous success of late, but it is just one method for achieving artificial intelligence.\n\nAt the birth of the field of AI in the 1950s, AI was defined as any machine capable of performing a task that would typically require human intelligence.\n\nAI systems will generally demonstrate at least some of the following traits: planning, learning, reasoning, problem solving, knowledge representation, perception, motion, and manipulation and, to a lesser extent, social intelligence and creativity.\n\nAlongside machine learning, there are various other approaches used to build AI systems, including evolutionary computation, where algorithms undergo random mutations and combinations between generations in an attempt to \"evolve\" optimal solutions, and expert systems, where computers are programmed with rules that allow them to mimic the behavior of a human expert in a specific domain, for example an autopilot system flying a plane.");
	// }


	var rows = []
	var count = 0;
	for (i = 0; i < Math.ceil(names.length / 3); i++) {
		var cols = []
		for (j = 0; j < 3 && count < names.length; j++) {
			cols.push(<Col xs = {12} sm = {4} className = "person-wrapper" key = {j}>
				<InstrucCard imgSrc = {imgs[count]} name = {names[count]} shortDesc = {shortDescs[count]} longDesc = {longDescs[count]} />
			</Col>
			);
		count++;
		}
		rows.push(<Row className = "show-grid text-center" key = {i}>
			{cols}
		</Row>
		);
	}


	return (
		<Container>
			<Jumbotron>
				<img src = {h3} alt = "" />
			</Jumbotron>
			<h1 className="show-grid text-center">Our Instructors !!</h1>
			{rows}
		</Container>
	);
}
 
export default Instructor;
