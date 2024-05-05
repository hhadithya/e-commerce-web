import { FaStar } from "react-icons/fa";
import '../Stylesheets/productView.css';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';

function ProductView() {
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
                      src="/Images/top1-1.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/Images/top1-2.webp"
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
                <h2 className="card-title">Shinu Sleeve Shirt - Gray</h2>
                <p className="card-text">
                  Innovate bootstrapping disrupt innovate innovate long shadow engaging fund. Actionable insight big paradigm disrupt.Innovate bootstrapping disrupt innovate innovate.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <p className="card-text">PRICE: $499</p>
                    <p className="card-text">AVAILABLE IN STOCK</p>
                  </div>
                  <div className="col-md-6">
                    <p className="card-text">
                      <FaStar className='star-style'/>
                      <FaStar className='star-style'/>
                      <FaStar className='star-style'/>
                      <FaStar className='star-style'/>
                      <FaStar className='star-style'/>
                      (74 Reviews)
                    </p>
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
                  <button className="btn btn-outline-dark btn btnAdd" type="button">
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
