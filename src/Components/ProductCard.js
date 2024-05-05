import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Stylesheets/productCard.css';
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';

function ProductCard({title, price, image, id}) {
  const [cart, setCart] = useState([]);
  const [products] = useState({title, price, image, id});

  const addToCart = (products) => {
    console.log("Added to cart");
    setCart([...cart, products]);
  }
  
  return (
    <div className="d-flex" style={{color: '#151515'}}>
      <Card  style={{ width: '20rem', height: '30rem', borderRadius: '0%', border: '0'}}>  
      <div className="image-wrapper">
        <Card.Img className="my-card-img" variant="top" src={image}/>
        <Link to={`/product-view/${id}`} style={{textDecoration: 'none'}}>
          <Card.ImgOverlay className="my-card-img-overlay-text">Quick View</Card.ImgOverlay>
        </Link>
        <FaHeart className="heart-icon" />
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
          <Button variant="outline-dark" id="add-to-cart-button" onClick={() => addToCart(products)}>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;