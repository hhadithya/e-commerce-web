import React from 'react';
import '../Stylesheets/CheckOut.css';

function CheckOutCard() {
    document.addEventListener("DOMContentLoaded", function () {
        const changeButton = document.querySelector(".change-button");
        const shippingDetails = document.querySelector(".shipping-details");
        const paymentForm = document.querySelector(".payment-details form");
    
        // Toggle shipping information visibility
        changeButton.addEventListener("click", function () {
            shippingDetails.classList.toggle("hidden");
        });
    
        // Show/hide payment form based on payment method selection
        const paymentMethods = document.querySelectorAll(".payment-methods input[type='radio']");
        paymentMethods.forEach(function (method) {
            method.addEventListener("change", function () {
                if (method.id === "apple-pay") {
                    paymentForm.style.display = "none";
                } else {
                    paymentForm.style.display = "block";
                }
            });
        });
    });
    
  return (
    <div>
      <header>
        <a href=".com" className="back-button">Back</a>
        <div className="logo">
          <img src="images/KONIK logo Original.png" alt="KONIK Logo" />
          <h1>KONIK Checkout</h1>
        </div>
      </header>
      <main>
        <section className="order-summary">
          <h2>Order Summary</h2>
          <ul className="order-items">
            <li>
              <img src="images/pro1.jpeg" alt="Product 1" />
              <div>
                <p>crew neck striped cuttee</p>
                <p>$60.00</p>
              </div>
            </li>
            <li>
              <img src="images/pro2.jpeg" alt="Product 2" />
              <div>
                <p>roung neck inclined cuttee<br /> (Qty: 2)</p>
                <p>$50.00 each</p>
              </div>
            </li>
          </ul>
          <p className="subtotal">Subtotal: $160.00</p>
          <p className="shipping">Shipping: $5.00</p>
          <p className="total">Total Due: $165.00</p>
        </section>
        <section className="shipping-information">
          <h2>Shipping Information</h2>
          <div className="shipping-details">
            <p><b>Deliver to:</b> Nirmal Priyankara</p>
            <p><b>Phone:</b> 711800797</p>
            <p><b>Address:</b> No 05, Janaudana Gammanaya, Batugampla, Handapangoda., Ingiriya, Kalutara, Western</p>
            <button className="change-button">Change</button>
          </div>
        </section>
        <section className="payment-details">
          <h2 style={{ fontSize: '1rem' }}>Payment Details</h2>
          <form>
            <label htmlFor="card-number">Card Number:</label>
            <input type="text" id="card-number" placeholder="0000 0000 0000 0000" required />
            <label htmlFor="expiration-date">MM/YY:</label>
            <input type="text" id="expiration-date" placeholder="04/27" required />
            <label htmlFor="cvc">CVC:</label>
            <input type="text" id="cvc" placeholder="365" required />

            <button type="submit" style={{ fontSize: '1rem' }}>Pay $165.00</button>
            <p style={{ textAlign: 'center' }}>or</p>

            <div className="payment-methods">
              <button type="button" id="apple-pay">
                <img src="images/apple.png" alt="Apple Pay" />
                <span>Apple Pay</span>
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 KONIK Checkout. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CheckOutCard;
