import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/banner.jpg"
          alt="First slide"
          style={{ objectFit: 'cover' , height: 'auto'}}
        />
        <Carousel.Caption>
          {/* <h3>Slide 1</h3> */}
          {/* <p>Some description for slide 1</p> */}
          {/* <button className="btn btn-primary">Shop Now</button> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
