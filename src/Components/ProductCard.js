import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/productCard.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  hidden: { opacity: 0, y: 100 }, // start from below the original position
  show: {
    opacity: 1,
    y: 0, // end at the original position
    transition: {
      delay: 0.5,
      duration: 1, // increased duration for smoother transition
      ease: "anticipate" // changed easing function for smoother transition
    }
  },
};

function ProductCard({title, price, image, text}) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
  });

  return (
    <motion.div className="d-flex justify-content-center" ref={ref} variants={variants} initial="hidden" animate={inView ? 'show' : 'hidden'}>
      <Card style={{ width: '22rem'}}>
        <Card.Img variant="top" src={image} style={{objectFit: 'cover', height: '15rem'}}/>
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
    </motion.div>
  );
}

export default ProductCard;