import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

import CourseSlider from './CourseSlider';
import Testimonials from './Testimonials';

import './Home.css';

function Home() {
  return (
    <Container fluid style={{padding:0}}>
      <Jumbotron fluid style={{padding:0, overflow:"hidden"}}>
        <div>
          <img src={require('../images/homeh.gif')} alt=""/>
          <div className="jumbotext sectionHeading">UPSKILL<br/>YOURSELF</div>
        </div>
      </Jumbotron>
      <Row className="justify-content-md-center">
        <Col xs = {12} sm = {10}>
          <h1 className="sectionHeading text-center">Courses</h1>
          <CourseSlider />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs = {12} sm = {10}>
          <h1 className="sectionHeading text-center">Testimonials</h1>
          <Testimonials />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;