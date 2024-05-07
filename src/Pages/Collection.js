import React, { useState } from 'react';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProductRows from './ProductRows';
import '../Stylesheets/Collection.css';
import Loading from '../Components/Loading';

function Collection(){
    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = (loading) => {
      setIsLoading(loading);
    };
    return (
        <>
            {isLoading ? <Loading /> : null}
            <Navbar />
            <div className='image-container'>
                <img src="/Images/tops.webp" alt="konik t shirt" className='back'/>
                <p>Men Casual</p>
            </div>
            <ProductRows onLoading={handleLoading} title= "" dbCollection="mens-casual" />
            <Footer />
        </>
      );
}
export default Collection;

