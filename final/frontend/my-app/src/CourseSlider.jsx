import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

var fn = function () {
  /* do you want */  
}

export default class CourseSlider extends Component {

  render() {
    return (
      <div>
        <Coverflow
          height={500}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
          infiniteScroll={true}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img src={require('./ai.jpg')} alt='Album one' />
          </div>
          <img src={require('./bd.jpg')} alt='Album two' data-action="localhost:3000/Courses/bd"/>
          <img src={require('./django.jpg')} alt='Album three' data-action="localhost:3000/Courses/django"/>
          <img src={require('./dl.jpg')} alt='Album four' data-action="localhost:3000/Courses/dl"/>
          <img src={require('./ml.jpg')} alt='Album five' data-action="localhost:3000/Courses/ml"/>
          <img src={require('./python.jpg')} alt='Album six' data-action="localhost:3000/Courses/python"/>
        </Coverflow>
      </div>
    );
  }

};

// ReactDOM.render(
//   <Container></Container>,
//   document.querySelector('.example_4')
// );