import React, { useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

import './InstrucCard.css';

const InstrucCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped = {isFlipped} flipDirection = "horizontal" flipSpeedBackToFront = {0.75} flipSpeedFrontToBack = {0.75} containerStyle = {{
      width: "80%",
      marginLeft: "10%"
    }}>
        <div onMouseEnter = {handleHover} className = "shadowBox">
          <Image className = "profile-pic" src = {require('../images/' + props.imgSrc)} fluid/>
        </div>
 
        <div onMouseLeave = {handleHover} className = "shadowBox backContainer">
          <div className = "back">
            <h2 style={{color:"#1686ff"}}>{props.name}</h2>
            <p>{props.shortDesc}</p>
            <Link to = {{
            pathname:'/About', 
            imgSrc: props.imgSrc, 
            name: props.name,
            desc: props.longDesc
            }}>
              <Button variant = "outline-primary">See more</Button>
            </Link>
          </div>
        </div>
      </ReactCardFlip>
  )
}

export default InstrucCard;