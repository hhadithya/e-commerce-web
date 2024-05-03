import React from 'react';
import '../Stylesheets/footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJChzreeLkSgqlE_XVfx_IeQotu7HK7P1mM3mlHyAZFw&s" alt="Company Logo" />
                            <p>FOLLOW US</p>
                            <div class="social-icons">
                                <i class="fab fa-facebook facebook-icon"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-youtube"></i>
                                <i class="fab fa-tiktok"></i>
                            </div>
                            <p style={{paddingTop: '60px'}}>&copy; 2024 FOA Clothing. All rights reserved. Powered by Pentacove</p>
                        </div>
                    <div class="col-md-6">
                        <p>SIGN UP FOR THE NEWSLETTER</p>
                        <p>Be the first to know about our new collection and promotions.</p>
                        <form class="row g-2 align-items-center">
                                <div class="col-auto">
                                    <label for="emailInput" class="visually-hidden">Email address</label>
                                    <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                                <div id="emailHelp" class="form-text col-12">We'll never share your email with anyone else.</div>
                            </form>
                        <div class="row" style={{marginTop: '10px'}}>
                            <div class="col-md-6">
                                <p>SUPPORT</p>
                                <p class="text1">Terms and conditions</p>
                                <p class="text1">Privacy Policy</p>
                                <p class="text1">Refund Policy</p>
                                <p class="text1">Shipping Policy</p>
                            </div>
                            <div class="col-md-6">
                                <p>INFO</p>
                                <p class="text1">Our Story</p>
                                <p class="text1">Contact Us</p>
                                <p class="text1">Careers at FOA</p>
                                <p class="text1">Training Dept</p>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;