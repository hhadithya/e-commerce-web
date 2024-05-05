import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import ProductView from '../src/Pages/ProductView';
import CheckOutCard from './Components/CheckOutCard';
import Collection from '../src/Pages/Collection';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-view/:id" element={<ProductView />} />
        <Route path="/checkout" element={<CheckOutCard />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </>
  );
}

export default App;
