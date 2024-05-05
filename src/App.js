import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductView from './Pages/ProductView';
import CheckOutCard from './Components/CheckOutCard';
import MensCollection from './Pages/MensCollection';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-view/:id" element={<ProductView />} />
        <Route path="/checkout" element={<CheckOutCard />} />
        <Route path="/menscollection" element={<MensCollection />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
