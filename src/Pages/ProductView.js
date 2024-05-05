import { FaStar } from "react-icons/fa";
import '../Stylesheets/productView.css';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';

function ProductView() {
  return (
    <>
      <Navbar />
      <div className="container" id="vertical-align">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <div id="productCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtjdC0tRtNVoiPSLMj4-WQTjk-DmTnvgKNT1bTxyRNA&s"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://www.ubuy.com.lk/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjQ4YzU3MDIxOTEwY2IxYjExNWIwNTYyLWV2ZXJjcm9zcy1oZWFkbGlnaHQtcmVwbGFjZW1lbnQtZm9yLWg1LmpwZw.jpg"
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
                <div className="col-md-8 d-flex">
                  <div className="card-body">
                    <h2 className="card-title">CycleBoard Rover Electric Scooter</h2>
                    <p className="card-text">
                      Innovate bootstrapping disrupt innovate innovate long shadow engaging fund. Actionable insight big paradigm disrupt.Innovate bootstrapping disrupt innovate innovate.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <p className="card-text">PRICE: $499</p>
                        <p className="card-text">AVAILABLE IN STOCK</p>
                        <p className="card-text"><i>*Free Shipping</i></p>
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
                        <div className="input-group mb-3">
                          <span className="input-group-text">Qty</span>
                          <input
                            type="number"
                            className="form-control"
                            aria-label="Quantity"
                            defaultValue="1"
                          />
                          <button type="button" className="btn btn-outline-dark">
                            +
                          </button>
                        </div>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Black</option>
                          <option value="1">White</option>
                          <option value="2">Red</option>
                          <option value="3">Brown</option>
                        </select>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button className="btn btn-dark me-md-2" type="button">
                            ADD TO CART
                          </button>
                          <button className="btn btn-outline-dark" type="button">
                            ADD TO FAVOURITE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
