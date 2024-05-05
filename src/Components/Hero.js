import Carousel from 'react-bootstrap/Carousel';
import '../Stylesheets/Hero.css';

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
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/Subtract (1).png"
          alt="First slide"
          style={{ objectFit: 'cover' , height: 'auto'}}
        />
        <Carousel.Caption>
          <div class="text-overlay">
            <h1 className='heading'>KONIK STYLE</h1>
            <p className='text'>The most comfortable outfits you'll ever have.</p>
            <button type="button" className="btn btn-secondary button" >Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Hero;
