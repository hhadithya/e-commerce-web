import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from '../Components/ProductCard';
import products from '../data/products.json';

function Home(){
    return(
        <div className="App d-flex flex-wrap justify-content-center">
            {products.map(product => (
                <div className="m-2" key={product.id}>
                    <ProductCard title={product.title} price={product.price} image={product.image} text={product.text}/>
                </div>
            ))}
        </div>
    );
}

export default Home;