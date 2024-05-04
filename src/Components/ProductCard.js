import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Stylesheets/productCard.css';

function ProductCard({title, price, image}) {
  return (
    <div className="d-flex">
      <Card  style={{ width: '20rem', height: '30rem', borderRadius: '0%', border: '0'}}>  
      <div className="image-wrapper">
        <Card.Img className="my-card-img" variant="top" src={image}/>
        <Card.ImgOverlay className="my-card-img-overlay-text"
        >Quick View</Card.ImgOverlay>
      </div>
        <Card.Body className="text-center">
          <Card.Title className="my-font">{title}</Card.Title>
          <Card.Text className="my-font">{price}</Card.Text>
          <div className="my-font">
            <Button variant="outline-dark" id="button-line">S</Button>
            <Button variant="outline-dark" id="button-line">M</Button>
            <Button variant="outline-dark" id="button-line">L</Button>
            <Button variant="outline-dark" id="button-line">XL</Button>
          </div>
          <Button variant="outline-dark" id="add-to-cart-button">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;