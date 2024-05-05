import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import '../Stylesheets/NavBar.css';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
      }, []);

      const handleLogout = () => {
        auth.signOut().then(() => {
          setUser(null);
          navigate('/login');
        });
      };

  var cartCount = 0;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
        <div className="container">
        <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <RiMenu2Fill size={25} style={{color:'#151515'}}/>
          </button>
          <a
            className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
            href=".com"
          >
            <span className="text-uppercase fw-lighter ms-2">KONIK CLOTHINGS</span>
          </a>

          <div className="order-lg-2 nav-btns">
            <button type="button" className="btn position-relative">
              <Link to="/cartview" style={{textDecoration: 'none', color: '#151515'}}><CiShoppingCart size={25}/></Link>
              <span className="position-absolute top-0 start-100 translate-middle badge bg-dark rounded-circle">{cartCount}</span>
            </button>
            <button type="button" className="btn position-relative">
              <CiSearch size={25}/>
            </button>
            {user ? (
                <button type="button" className="btn position-relative" onClick={handleLogout}>Logout</button>
                  ) : (
                    <button type="button" className="btn position-relative" onClick={() => navigate('/login')}>Login</button>
                  )}
          </div>
          
          <div className="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-uppercase text-color" href="/">home</a>
              </li>
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-uppercase text-color" href="/">new trends</a>
              </li>
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-uppercase text-color" href="/">men formal</a>
              </li>
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-uppercase text-color" href="/collection">men casual</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
