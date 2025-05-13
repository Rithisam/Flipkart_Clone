import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Cart from './React-flipkart/Cart/Cart';
import EmptyCart from './React-flipkart/Cart/EmptyCart';
import Home from './React-flipkart/Home/Home';




import PlaceOrder from './React-flipkart/order/PlaceOrder';


import OrderPlaced from './React-flipkart/order/OrderPlaced';
import MyOrder from './React-flipkart/order/MyOrder';

import PersonalInfo from './React-flipkart/Home/PersonalInfo';



import Wishlistcontainer from './React-flipkart/Wishlist/Wishlistcontainer';

import Login from './React-flipkart/Home/Login';
import Profile from './React-flipkart/Home/Profile';
import Description from './React-flipkart/Description/Description';
import FilterPage from './React-flipkart/Description/FilterPage';



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
      
        <Route path="/info" element={<PersonalInfo/>} />
        
        <Route path="/wishlist" element={<Wishlistcontainer/>} />


      </Routes>
    </Router>
    
   
  );
}

export default App;



