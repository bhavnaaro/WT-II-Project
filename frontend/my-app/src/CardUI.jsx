import React from 'react';

import './card-style.css';

const Card = props => {
	return (
		<div className="card text-center">
			<div className="overflow">
				<img src={require('./' + props.imgsrc)} alt="" className="card-img-top" />
			</div>
			<div className="card-body text-dark">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text text-secondary">{props.text}</p>
				<a href={"/Courses/" + props.title} className="btn btn-outline-success">Learn More</a>
			</div>
		</div>
		
	);
};

export default Card;
