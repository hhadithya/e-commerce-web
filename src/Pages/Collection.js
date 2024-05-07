import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProductRows from './ProductRows';
import '../Stylesheets/Collection.css';

function Collection(){
    return (
        <>
            <Navbar />
            <div className='image-container'>
                <img src="/Images/tops.webp" alt="konik t shirt" className='back'/>
                <p>Men Casual</p>
            </div>
            <ProductRows title= "" dbCollection="mens-casual"/>
            <Footer />
        </>
      );
}
export default Collection;

