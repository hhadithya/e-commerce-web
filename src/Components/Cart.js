import React, { useState } from 'react';
import '../Stylesheets/Cart.css';


const Cart = () => {
  const [termsChecked, setTermsChecked] = useState(false);

  const handleTermsChange = () => {
    setTermsChecked(!termsChecked);
  };

  return (
    <div className="container" style={{padding: '8% 0'}}>
        <div className="row mt-5">
            <div className="col-md-12">
            <h2>Your Cart</h2>
            </div>
        </div>
        <div class="row mt-0">
            <div class="col-md-12">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    Shinu Sleeve Shirt - Gray&nbsp;&nbsp;&nbsp;
                    <img
                        src="/Images/top.webp"
                        alt="t-shirt"
                        className='cart-img'
                    /><br />
                    </td>
                    <td>
                    <input
                        type="number"
                        className="qty-input mt-4"
                        aria-label="Quantity"
                        value="1"
                    />
                    </td>
                    <td>
                    <h5 className="mt-4">$99.99</h5>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-md-6">
            <a href="home" className="btn btn-outline-dark checkout-btn fw-bolder"
                >Continue Shopping</a>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-6 d-flex">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="termsCheckbox"
                        checked={termsChecked}
                        onChange={handleTermsChange}
                    />
                    <label className="form-check-label" htmlFor="termsCheckbox">
                        I agree with the terms and conditions
                    </label>
                </div>
            </div>
        </div>

        <div className="mt-3">
            <button
                type="submit"
                className="btn btn-dark fw-bolder checkout-btn"
                disabled={!termsChecked}
                style={{fontWeight: 'lighter'}}
                >
                PROCEED TO CHECKOUT
            </button>
        </div>
    </div>
  );
};

export default Cart;