import React, { Component } from 'react';
import Card from './CardUI';

import img1 from './ai.jpeg';
import img2 from './bd.jpg';
import img3 from './django.jpg';


class Cards extends Component {
	render() {
		return (
			<div className="container-fluid d-flex justify-content-center">
				<div className="row">
					<div className="col-md-4">
						<Card imgsrc={img1} title="Artificial Intelligence"/>
					</div>
					<div className="col-md-4">
						<Card imgsrc={img2} title="Big Data"/>
					</div>
					<div className="col-md-4">
						<Card imgsrc={img3} title="Django"/>
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;

