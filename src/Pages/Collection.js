import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../Stylesheets/Collection.css';

function Home(){
    return (
        <>
            <Navbar />
            <div className='image-container'>
                <img src="Images/tops.webp" alt="konik t shirt" className='back'/>
                <p className='text3'>Men Casual</p>
            </div>
            <Footer />
        </>
      );
}
export default Home;

