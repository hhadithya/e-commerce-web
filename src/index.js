import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductRows from './Pages/ProductRows';
import Footer from './Components/Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductRows />
    <Footer />
  </React.StrictMode>
);

