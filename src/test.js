import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './test.css'

function BasicExample() {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="/images/hoodie.jpg" />
        <Card.Body className="text-center">
        <Card.Title className="my-font">Man Hoodie</Card.Title>
        <Card.Text className="my-font">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Card.Text className="my-font">
        Price: $99.99
        </Card.Text>
          <div className="my-font">
            <Button variant="outline-dark" id="button-line">S</Button>
            <Button variant="outline-dark" id="button-line">M</Button>
            <Button variant="outline-dark" id="button-line">L</Button>
            <Button variant="outline-dark" id="button-line">XL</Button>
          </div>
          <Button variant="outline-dark" id="add-to-cart-button" className="my-font">Add to cart</Button>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default BasicExample;