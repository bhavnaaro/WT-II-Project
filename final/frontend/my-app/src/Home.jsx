import React from 'react';
import CourseSlider from './CourseSlider';
import Testimonials from './Testimonials';
import { Container, Row, Col, Jumbotron} from 'react-bootstrap';

function Home() {

  return (
    <Container fluid style={{padding:0}}>
      <Jumbotron fluid style={{padding:0}}>
        <div>
          <img src={require('./homeh.gif')} />
        </div>
      </Jumbotron>
      <Row className="justify-content-md-center">
        <Col xs = {12} sm = {8}>
          <h1>Courses</h1>
          <CourseSlider />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs = {12} sm = {8}>
          <h1>Testimonials</h1>
          <Testimonials />
        </Col>
      </Row>
    </Container>
  );

}

export default Home;