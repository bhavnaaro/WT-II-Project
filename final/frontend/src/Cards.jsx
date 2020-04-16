import React, { Component } from 'react';
import Card from './CardUI';

import img1 from './ai.jpeg';
import img2 from './bd.jpg';
import img3 from './django.jpg';
import img4 from './ml.jpg';
import img5 from './python.jpeg';
import { Container, Jumbotron } from 'react-bootstrap';
import h from './h.jpg';


class Cards extends Component {
	render() {
		return (
			<Container>
				<Jumbotron className="jumbotron my-2">
					<img className="card-img-top" src={h} alt="" />
				
				
				</Jumbotron>
					<div className="container-fluid d-flex justify-content-center">
						<div className="row">
							<div className="col-md-4">
								<Card imgsrc={img1} title="Artificial Intelligence" text="Intelligence demonstrated by machines"/>
							</div>
							<div className="col-md-4">
								<Card imgsrc={img2} title="Big Data" text="Deal with large volume of data that inundates a business on day-to-day basis"/>
							</div>
							<div className="col-md-4">
								<Card imgsrc={img3} title="Django" text="Python-based open source web framework,which follows the model template-view architectural pattern."/>
							</div>
							<div className="col-md-4">
								<Card imgsrc={img4} title="Machine Learning" text="Application of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed."/>
							</div>
							<div className="col-md-4">
								<Card imgsrc={img5} title="Python" text="Python is an interpreted, high-level general purpose language."/>
							</div>
							<div className="col-md-4">
								<Card imgsrc={img3} title="Django" text="Python-based open source web framework,which follows the model template-view architectural pattern."/>
							</div>
						</div>
					</div>
			</Container>
		);
	}
}

export default Cards;

