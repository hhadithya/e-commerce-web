import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Stylesheets/productCard.css';
import { FaHeart } from "react-icons/fa";

function ProductCard({title, price, image, rate, rateCount, id}) {
  
  const navigate = useNavigate();

  const viewCard = () => {
    navigate('/product-view', { state: { id: id, title: title, price: price, image: image, rate: rate, rateCount: rateCount } });
  }

  function storeData() {
    let data = {
      id: id,
      title: title,
      price: price,
      image: image,
    };
    if (localStorage.getItem('product') === null) {
      localStorage.setItem('product', '[]');
    }
    let old_data = JSON.parse(localStorage.getItem('product'));
    old_data.push(data);
    localStorage.setItem('product', JSON.stringify(old_data));
    window.location.reload();
  }

  return (
    <div className="d-flex" style={{color: '#151515'}}>
      <Card  style={{ width: '20rem', height: '30rem', borderRadius: '0%', border: '0'}}>  
      <div className="image-wrapper">
        <Card.Img className="my-card-img" variant="top" src={image} onClick={viewCard}/>
        {/* <Link to={`/product-view/${id}`} style={{textDecoration: 'none'}}> */}
          <Card.ImgOverlay className="my-card-img-overlay-text" onClick={viewCard}>Quick View</Card.ImgOverlay>
        {/* </Link> */}
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
          <Button variant="outline-dark" id="add-to-cart-button" onClick={storeData}>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;