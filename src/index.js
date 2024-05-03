import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import ColorSchemesExample from './Components/NavBar';
import Hero from './Components/Hero';
import "bootstrap/dist/css/bootstrap.min.css";
// import SignIn from './Pages/SignIn';
// import ProductView from './Components/ProductView';
import Footer from './Components/Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SignIn /> */}
    <Hero />
    <ColorSchemesExample />
    {/* <DarkVariantExample /> */}
    <Home />
    {/* <ProductView /> */}
    <Footer />
  </React.StrictMode>
);

