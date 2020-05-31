import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import InstrucCard from './InstrucCard';

import './Instructor.css';

import h3 from '../images/h3.jpg';

export default class Instructor extends Component {

	constructor(props) {
		super(props);
		this.state = { instructorData: [] };
		this.myFunction=this.myFunction.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:5000/instructor/all')
				.then(res => {
						this.setState({ instructorData: res.data });
				})
				.catch(function (error) {
						console.log(error);
				});
	}

	myFunction(item,index) {
		if (item['img'] !== undefined) {
			this.imgs.push(item['img']);
			this.names.push(item['instructorName']);
			this.shortDescs.push(item['shortDescs']);
			this.longDescs.push(item['longDescs']);
		}
	}

	render() {
		this.imgs=[];
		this.names=[];
		this.shortDescs=[];
		this.longDescs=[];

		console.log(this.state.instructorData);

		this.state.instructorData.forEach(this.myFunction);

		var imgs=this.imgs;
		var names=this.names;
		var shortDescs=this.shortDescs;
		var longDescs=this.longDescs;

		var i,j;
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
				<Jumbotron style={{padding:0}}>
					<img src = {h3} alt = "" style={{width:"100%"}}/>
				</Jumbotron>
				<h1 className="show-grid text-center sectionHeading">Our Instructors</h1>
				{rows}
			</Container>
		);
	}
}