import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductView from './Pages/ProductView';
import Collection from './Pages/Collection';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import CartView from './Pages/CartView';
import { DataProvider } from './Context/DataContext';
import Loading from './Components/Loading';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product-view/:id" element={<ProductView />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cartview" element={<CartView />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
