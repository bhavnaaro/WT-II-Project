import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import axios from 'axios';

import Card from './CardUI';

import h from '../images/h.jpg';

class Cards extends Component {

	constructor(props) {
		super(props);
		this.state = { recCourseData: [] };
		this.myFunction=this.myFunction.bind(this);
		this.coursesDiv=this.coursesDiv.bind(this);
	}

	componentDidMount() {
		
		axios.get('http://localhost:5001/api/v1.0/recommendations/2')
				.then(res => {
						this.setState({ recCourseData: res.data });
				})
				.catch(function (error) {
						console.log(error);
				});
	}

	myFunction(item,index) {
		//this.imgs.push(item['img']);
		this.names.push(item['courseName']);
		this.shortDescs.push(item['desc']);
	}

	coursesDiv(cols) {
		return (
			<div className="container-fluid d-flex justify-content-center">
				<div className="row">
					{cols}
				</div>
			</div>
		);
	}

	render() {

		this.names=[];
		this.shortDescs=[];

		this.state.recCourseData.forEach(this.myFunction);

		console.log(this.state.recCourseData);
		
		var hnames=["CloudComputing", "NaturalLanguageProcessing", "TopicsinDeepLearning", "MachineLearning", "Python", "BigData", "ArtificialIntelligence", "AdvancedWebTechnology", "Blockchain"];
		var hshortDescs=[
			"The on-demand availability of computer system resources without direct active user management.",
			"The application of computational techniques to the analysis and synthesis of natural language and speech.",
			"Part of a broader family of ML methods based on artificial neural networks with representation learning.",
			"Provides systems the ability to automatically learn and improve from experience.",
			"Python is an interpreted, high-level general purpose language.",
			"Extremely large data sets that may be analysed computationally to reveal patterns, trends, and associations.",
			"The theory and development of computer systems able to perform tasks normally requiring human intelligence.",
			"The means by which computers communicate with each other using markup languages and multimedia packages.",
			"System in which a record of transactions made in cryptocurrency are maintained across a peer-to-peer network."
		 ];
		
		var i;
		var hcols = []
		for (i = 0; i < hnames.length; i++) {
				hcols.push(<div className="col-md-4" key={i}>
					<Card imgsrc={hnames[i]+'.jpg'} title={hnames[i]} text={hshortDescs[i]}/>
				</div>
				);
		}

		// var names=this.names;
		// var shortDescs=this.shortDescs;

		var names=["Python", "NaturalLanguageProcessing", "AdvancedWebTechnology"];
		var shortDescs=[
			"Python is an interpreted, high-level general purpose language.",
			"The application of computational techniques to the analysis and synthesis of natural language and speech.",
			"The means by which computers communicate with each other using markup languages and multimedia packages."
		];

		var cols = []
		for (i = 0; i < names.length; i++) {
				cols.push(<div className="col-md-4" key={i}>
					<Card imgsrc={names[i]+'.jpg'} title={names[i]} text={shortDescs[i]}/>
				</div>
				);
		}

		return (
			<Container>
				<Jumbotron className="jumbotron my-2" style={{overflow:"hidden", padding:0}}>
					<img src={h} alt="" />
				</Jumbotron>
				<br/><br/><br/><br/><br/>
				<h1 className="sectionHeading text-center">Recommended Courses</h1>
				{this.coursesDiv(cols)}
				<br/>
				<h1 className="sectionHeading text-center">All Courses</h1>
				{this.coursesDiv(hcols)}
			</Container>
		);
	}
}

export default Cards;