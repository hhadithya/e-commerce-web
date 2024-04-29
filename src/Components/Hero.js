import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Row>
          <Col md={6}>
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Col>
          <Col md={6}>
            <img
              className="d-block w-100"
              src="/images/img3.jpg"
              alt="First slide"
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col md={6}>
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Col>
          <Col md={6}>
            <img
              className="d-block w-100"
              src="/images/img3.jpg"
              alt="Second slide"
            />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;