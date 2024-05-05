import Navbar from '../Components/NavBar';
import Hero from '../Components/Hero';
import ProductRows from '../Pages/ProductRows';
import Footer from '../Components/Footer';


function Home(){
    return (
        <>
            <Navbar />
            <Hero />
            <ProductRows />
            <Footer />
        </>
      );
}
export default Home;

