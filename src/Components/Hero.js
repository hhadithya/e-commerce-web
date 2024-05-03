import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner.webp"
          alt="First slide"
          style={{ objectFit: 'cover' , height: 'auto'}}
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Some description for slide 1</p>
          <button className="btn btn-primary">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner.jpg"
          alt="Second slide"
          style={{ objectFit: 'cover' , height: 'auto'}}
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Some description for slide 2</p>
          <button className="btn btn-primary">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items for additional slides */}
    </Carousel>
  );
}

export default Hero;
