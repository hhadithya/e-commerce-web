import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import products from '../data/products.json';

function ProductRows(){
    return(
        <>
            <h2 className="text-center" style={{letterSpacing:'1.1rem', fontWeight: '600', padding: '5% 0', color: '#151515'}}>BEST OUTFITS</h2>
            <div className="App d-flex flex-wrap justify-content-center">
                {products.map(product => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center text-center" key={product.id}>
                        <Link to={`/product-view/${product.id}`} style={{textDecoration: 'none'}}>
                            <ProductCard title={product.title} price={product.price} image={product.image} text={product.text}/>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductRows;