import React, { useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import products from '../data/products.json';

function ProductRows(){
    useEffect(() => {
        document.title = "Home";
    }, []);
    return(
        <div className="App d-flex flex-wrap justify-content-center" style={{paddingLeft: '3%'}}>
        {products.map(product => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                <ProductCard title={product.title} price={product.price} image={product.image} text={product.text}/>
            </div>
        ))}
        </div>
    );
}

export default ProductRows;