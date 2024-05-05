import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductView from './Pages/ProductView';
import CheckOutCard from './Components/CheckOutCard';
import Collection from './Pages/Collection';
import LogIn from './Pages/LogIn';
import Signup from './Pages/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-view/:id" element={<ProductView />} />
        <Route path="/checkout" element={<CheckOutCard />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
