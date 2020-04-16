import React from 'react';
import CourseSlider from './CourseSlider';
import Testimonials from './Testimonials';
import { Container, Row, Col} from 'react-bootstrap';

function Home() {

  return (
    <Container fluid>
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