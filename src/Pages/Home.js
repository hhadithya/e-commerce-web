import React, { useState } from 'react';
import Navbar from '../Components/NavBar';
import Hero from '../Components/Hero';
import ProductRows from './ProductRows';
import Footer from '../Components/Footer';
import CardLine from '../Components/CardLine';
import About from '../Components/About';
import Loading from '../Components/Loading';


function Home(){
    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = (loading) => {
      setIsLoading(loading);
    };
  
    return (
        <>
            {isLoading ? <Loading /> : null}
            <Navbar />
            <Hero />
            <CardLine />
            <ProductRows onLoading={handleLoading} title="TOP OUTFITS" dbCollection="best-sales"/>
            <About />
            <Footer />
        </>
      );
}
export default Home;

