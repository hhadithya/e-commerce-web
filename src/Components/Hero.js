import { Link } from 'react-router-dom';
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
        <Carousel.Caption  className='item1'>
          <div class="text-overlay">
            <h1 className='heading1'>KONIK STYLE</h1>
            <p className='text1'>The most comfortable outfits you'll ever have</p>
            <button type="button" className="btn btn-secondary button" >
                <Link to="/collection" style={{textDecoration: 'none', color: '#ffffff'}}>Shop Now</Link>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Hero;
