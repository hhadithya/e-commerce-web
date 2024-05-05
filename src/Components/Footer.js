import '../Stylesheets/Footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/Images/logo-white.png" alt="Company Logo" className="img-fluid" />
                        <div className="d-flex flex-column gap-1">
                            <p style={{ marginBottom: '1%' }} className='heading'>FOLLOW US</p>
                            <div className="d-flex gap-4">
                                <FaInstagram size={25} />
                                <FaFacebook size={25} />
                                <FaTiktok size={25}  />
                                <FaYoutube size={25}  />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className='heading'>SIGN UP FOR THE NEWSLETTER</p>
                        <p style={{ fontWeight: 'lighter'}}>Be the first to know about our new collection and promotions.</p>
                        <form className="row g-2 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="emailInput" className="visually-hidden">Email address</label>
                                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-md-5">
                                <p className='heading'>SUPPORT</p>
                                <p className="text">Terms and conditions</p>
                                <p className="text">Privacy Policy</p>
                                <p className="text">Refund Policy</p>
                                <p className="text">Shipping Policy</p>
                            </div>
                            <div className="col-md-5">
                                <p className='heading'>INFO</p>
                                <p className="text">Our Story</p>
                                <p className="text">Contact Us</p>
                                <p className="text">Careers at FOA</p>
                                <p className="text">Training Dept</p>
                            </div>
                        </div>
                    </div>
                    <p id='copyRights'>&copy; 2024 KONIK Clothing. All rights reserved. Powered by FIT</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;