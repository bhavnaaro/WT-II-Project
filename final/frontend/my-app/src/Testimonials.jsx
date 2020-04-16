import React from 'react';
import { Carousel } from 'react-bootstrap';

function Testimonials() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./mltest.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dev Bhartra</h3>
          <p>Machine learning helped me choose a new career path.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./bdtest.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Bhavna Arora</h3>
          <p>Big data helped take my systems expertise to a new level.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./iottest.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Saioni Chatterjee</h3>
          <p>The internet of things governs our very world. It's a super exciting area!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;