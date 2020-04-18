import React, { Component } from 'react';
import Coverflow from 'react-coverflow';

export default class CourseSlider extends Component {
  render() {
    return (
      <div style={{backgroundImage: "radial-gradient(circle, #003352, #000c1c)"}}>
        <Coverflow
          height={500}
          displayQuantityOfSide={3}
          enableHeading={true}>
          <img src={require('../images/ArtificialIntelligence.jpg')} alt='ArtificialIntelligence' data-action="http://localhost:3000/Courses/ArtificialIntelligence"/>
          <img src={require('../images/NaturalLanguageProcessing.jpg')} alt='NaturalLanguageProcessing' data-action="http://localhost:3000/Courses/NaturalLanguageProcessing"/>
          <img src={require('../images/TopicsinDeepLearning.jpg')} alt='TopicsinDeepLearning' data-action="http://localhost:3000/Courses/TopicsinDeepLearning"/>
          <img src={require('../images/CloudComputing.jpg')} alt='CloudComputing' data-action="http://localhost:3000/Courses/CloudComputing"/>
          <img src={require('../images/Python.jpg')} alt='Python' data-action="http://localhost:3000/Courses/Python"/>
          <img src={require('../images/BigData.jpg')} alt='BigData' data-action="http://localhost:3000/Courses/BigData"/>
          <img src={require('../images/Blockchain.jpg')} alt='Blockchain' data-action="http://localhost:3000/Courses/Blockchain"/>
          <img src={require('../images/AdvancedWebTechnology.jpg')} alt='AdvancedWebTechnology' data-action="http://localhost:3000/Courses/AdvancedWebTechnology"/>
          <img src={require('../images/MachineLearning.jpg')} alt='MachineLearning' data-action="http://localhost:3000/Courses/MachineLearning"/>
        </Coverflow>
      </div>
    );
  }
};