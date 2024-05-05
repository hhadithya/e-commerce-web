import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import ProductView from '../src/Pages/ProductView';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-view/:id" element={<ProductView />} />
    </Routes>
  );
}

export default App;
