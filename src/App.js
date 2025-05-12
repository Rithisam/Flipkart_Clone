import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Description from './Description';
import Login from './Login';
import Cart from './Cart';
import FilterPage from './FilterPage';
import PlaceOrder from './PlaceOrder';
import EmptyCart from './EmptyCart';
import Profile from './Profile';
import OrderPlaced from './OrderPlaced';
import MyOrder from './MyOrder';
import WhishList from './WhishList';
import PersonalInfo from './PersonalInfo';
import WishList from './WhishList';
import Wishlistcontainer from './Wishlistcontainer';



function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Filter/:param" element={<FilterPage />} />
        <Route path="/Desc/:id" element={<Description />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
        <Route path="/empty" element={<EmptyCart/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/place" element={<OrderPlaced/>} />
        <Route path="/myorder" element={<MyOrder/>} />
        <Route path="/list" element={<WhishList/>} />
        <Route path="/info" element={<PersonalInfo/>} />
        <Route path="/wish" element={<WishList/>} />
        <Route path="/wishlist" element={<Wishlistcontainer/>} />


      </Routes>
    </Router>
    
   
  );
}

export default App;



