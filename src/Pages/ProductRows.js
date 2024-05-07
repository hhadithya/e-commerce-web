import ProductCard from '../Components/ProductCard';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

function ProductRows({title, dbCollection, onLoading}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
              onLoading(true);
              console.log('Fetching products...');
              const querySnapshot = await getDocs(collection(db, dbCollection));
              const productsData = querySnapshot.docs.map((doc) => doc.data());
              setProducts(productsData);
            } catch (error) {
              console.error('Error fetching products: ', error);
            } finally {
                console.log('Products fetched successfully!');
              onLoading(false);
            }
          };
      
          fetchProducts();
        }, [dbCollection]);

    return (
        <>
            <h2 className="text-center" style={{ letterSpacing: '1.1rem', fontWeight: '600', padding: '5% 0', color: '#151515' }}>{title}</h2>
            <div className="App d-flex flex-wrap justify-content-center">
                {products.map((product) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center text-center" key={product.id}>
                        <ProductCard title={product.title} price={product.price} image={product.image} id={product.id} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductRows;