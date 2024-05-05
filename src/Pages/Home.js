import Navbar from '../Components/NavBar';
import Hero from '../Components/Hero';
import ProductRows from './ProductRows';
import Footer from '../Components/Footer';
import CardLine from '../Components/CardLine';
import About from '../Components/About';


function Home(){
    return (
        <>
            <Navbar />
            <Hero />
            <CardLine />
            <ProductRows />
            <About />
            <Footer />
        </>
      );
}
export default Home;

