import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import ColorSchemesExample from './Components/NavBar';
import DarkVariantExample from './Components/Hero';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorSchemesExample />
    <DarkVariantExample />
    <Home />
  </React.StrictMode>
);

