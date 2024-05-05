import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../Stylesheets/Collection.css';

function Collection(){
    return (
        <>
            <Navbar />
            <div className='image-container'>
                <img src="Images/tops.webp" alt="konik t shirt" className='back'/>
                <p>Men Casual</p>
            </div>
            <Footer />
        </>
      );
}
export default Collection;

