import React, { Component } from 'react';
import Card from './CardUI';
import axios from 'axios';
import { Container, Jumbotron, Row, Col} from 'react-bootstrap';
import h from './h.jpg';


class Cards extends Component {

	constructor(props) {
		super(props);
		this.state = { recCourseData: [] };
		this.myFunction=this.myFunction.bind(this);
	}

	componentDidMount() {
		
		axios.get('http://localhost:5000/api/v1.0/recommendations/2')
				.then(res => {
						this.setState({ recCourseData: res.data });
				})
				.catch(function (error) {
						console.log(error);
				});
	}

	myFunction(item,index) {
		this.imgs.push(item['img']);
		this.names.push(item['courseName']);
		this.shortDescs.push(item['desc']);
	}


	render() {

		this.imgs=[];
		this.names=[];
		this.shortDescs=[];
		this.longDescs=[];

		this.state.recCourseData.forEach(this.myFunction);
		
		var himgs=["ai.jpg", "bd.jpg", "django.jpg", "ml.jpg", "python.jpg"];
		var hnames=["ArtificialIntelligence", "BigData", "Django", "MachineLearning", "Python"];
		var hshortDescs=["Intelligence demonstrated by machines.", "Deal with large volume of data.", "Python-based open source web framework.", "Provides systems the ability to automatically learn and improve from experience.", "Python is an interpreted, high-level general purpose language."];
		
		var i;
		var hcols = []
		for (i = 0; i < hnames.length; i++) {
				hcols.push(<div className="col-md-4" key={i}>
					<Card imgsrc={himgs[i]} title={hnames[i]} text={hshortDescs[i]}/>
				</div>
				);
		}

		var imgs=this.imgs;
		var names=this.names;
		var shortDescs=this.shortDescs;

		// var imgs=himgs;
		// var names=hnames;
		// var shortDescs=hshortDescs;

		var cols = []
		for (i = 0; i < names.length; i++) {
				cols.push(<div className="col-md-4" key={i}>
					<Card imgsrc={imgs[i]} title={names[i]} text={shortDescs[i]}/>
				</div>
				);
		}

		return (
			<Container>
				<Jumbotron className="jumbotron my-2" style={{overflow:"hidden"}}>
					<img className="card-img-top" src={h} alt="" />
				
				
				</Jumbotron>
					<br/><br/>
					<h2>Recommended Courses</h2>
					<div className="container-fluid d-flex justify-content-center">
						<div className="row">
							{cols}
						</div>
					</div>
					<br/><br/>
					<h2>All Courses</h2>
					<div className="container-fluid d-flex justify-content-center">
						<div className="row">
							{hcols}
						</div>
					</div>
			</Container>
		);
	}
}

export default Cards;

