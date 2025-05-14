import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from './CartActions';
import { resetCartEmptied } from './CartActions';
import '../../App.css';
import logo from '../images/logo1.png';
import kart from '../images/grocery-store.png';
import EmptyCart from './EmptyCart';


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);  
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const isCartEmptied = useSelector((state) => state.cart.isCartEmptied);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetCartEmptied());
  }, [dispatch]);

  
  if (cartItems.length === 0 || isCartEmptied) {
    return <EmptyCart />;
  }

  const handlePlaceOrder = () => {
    navigate(`/order`);
  };

  
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));  
  };

  

  return (
    <div>
      <div className='cartcontainer'>
        <div className='cart-navbar'>
          <nav>
          <img src={logo} alt="logo" className="fliplogoimg" />
          <input type="text" placeholder="Search for Products, Brands and More" />
          
          </nav>
          <p>Log in</p>
        </div>
      <div className='cart-products'>
        
        <div className='cart-item-list'>
        <div className='flipkart'>
          <span>Flipkart</span>
          <span>Grocery</span>
        </div>
        <div className='flipkart-address'>
         
          <p>Deliver to: <span>Chennai - 600063</span></p>
          <button>Change</button>
        </div>
      <div className='flipkart-product'>
      {cartItems.length === 0 ? (
        <div>
          
        </div>
        
        
      ) : (
        <ul>
          
          {cartItems.map((item) => (
            
            <li key={item.id}>
               
              <div className='cart-item'>
                 <img src={item.image} className='image-size'/>
                 <div>
                 <p>{item.title}</p>
                 <span className='seller-online'>Seller: Online </span>
                 <img src={kart} alt='kart' className='fkart'/>
                 <p className='cost'> <span className='original-cost'>$200.00</span> ${(item.price * item.quantity).toFixed(2)}</p>
                 </div>
                 

                
              </div>
              <div className='remove-btn'>
              
              <div className="quantity-controls">
                   <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                   <div>{item.quantity}</div>
                   <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)} className='re-btn'>REMOVE</button>
              </div>
              {cartItems.length > 1 ?(
            <hr></hr>
          ):( " ")}
            </li>
            
          ))}
          
        </ul>
       
      )}
      </div>
      <div className='order-place'>
        <button onClick={()=>handlePlaceOrder()}>PLACE ORDER</button>
      </div>
       
      </div>
      <div className='total-amount'>
        <div className='item-price'>
        <p>PRICE DETAILS</p>
        <hr></hr>
        <p>Price ({totalQuantity} items) <span>$200.00</span></p>

        
        <p>Discount <span>- $100.00</span></p>
        <p>Delivery Charges <span className='delivery'>$10 </span> <span className='free' >Free</span></p>
        <p>Protect Promise Fee <span>$0</span></p>
        <hr></hr>
        <p>TOTAL AMOUNT: <span>${totalPrice.toFixed(2)}</span></p>
        <hr></hr>
        <p>You will save $100.00 on this order</p>
        </div>
        
        <p className='safe'><span><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg'/></span>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
      </div>
      
      </div>
      <div className='cart-footer'>
        <div>
        <hr></hr>
        <div className='cart-policy'>
          <span className='sp1'> Policies:Returns Policy | Terms of use | Security | Privacy</span>
          <span className='sp2'>© 2007-2025 Flipkart.com</span>
        
         <span className='sp3'>Need help? Visit the Help Center or Contact Us</span>
         </div>
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default Cart;
