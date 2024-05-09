import { useLocation } from 'react-router-dom';
import { FaStar, FaRegStar } from "react-icons/fa";
import '../Stylesheets/productView.css';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';

function ProductView() {
  const location = useLocation();
  const { id, title, price, image, rate, rateCount } = location.state;

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
    <>
      <Navbar />
      <div className="container mt-5 JU" style={{padding: '5% 0', border: '0px'}}>
        <div className="card mb-3" style={{border: '0px'}}>
          <div className="row g-0 justify-content-around">
            <div className="col-md-6">
              <div id="productCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
                <div className="carousel-inner ">
                  <div className="carousel-item active ">
                    <img
                      src={image}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/Images/top1-1.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-5 d-flex" style={{marginTop: '5%'}}>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">
                  Innovate bootstrapping disrupt innovate innovate long shadow engaging fund. Actionable insight big paradigm disrupt.Innovate bootstrapping disrupt innovate innovate.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <p className="card-text">PRICE: {price}</p>
                    <p className="card-text" style={{color: 'green', fontSize: '0.9rem'}}>available in stock</p>
                  </div>
                  <div className="col-md-6">
                    <div className="card-text">
                      {Array(5)
                        .fill()
                        .map((_, i) => (i < rate ? <FaStar /> : <FaRegStar />))}
                      <br/>({rateCount} Reviews)
                    </div>
                    <div className="input-group mb-3 ">
                      <span className="input-group-text btnSelect">Qty</span>
                      <input
                        type="number"
                        className="form-control btnSelect"
                        aria-label="Quantity"
                        defaultValue="1"
                      />
                    </div>
                    <select className="form-select btnSelect" aria-label="Default select example">
                      <option selected>Black</option>
                      <option value="1">White</option>
                      <option value="2">Red</option>
                      <option value="3">Brown</option>
                    </select>
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex-column">
                  <button className="btn btn-outline-dark btn btnAdd" type="button" onClick={storeData}>
                    ADD TO CART
                  </button>
                  <button className="btn btn-outline-dark btn btnAdd" type="button">
                    ADD TO FAVOURITE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductView;
