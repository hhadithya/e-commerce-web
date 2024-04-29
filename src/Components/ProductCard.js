import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/productCard.css';

function ProductCard({title, price, image, text}) {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '22rem'}} className='card'>
        <Card.Img variant="top" src={image} />
        <Card.Body className="text-center">
        <Card.Title className="my-font"  style={{fontWeight: 'bold', fontSize: '120%'}}>{title}</Card.Title>
        <Card.Text className="my-font">{text}</Card.Text>
        <Card.Text className="my-font"  style={{fontSize: '102%'}}>{price}</Card.Text>
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

export default ProductCard;