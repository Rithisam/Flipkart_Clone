import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../Cart/CartActions';
import { addOrder } from './OrderAction';
import { clearCart } from '../Cart/CartActions'; 
import EmptyCart from '../Cart/EmptyCart';
import '../../App.css';
import logo from '../images/logo1.png';
import kart from '../images/kart-logo.png';

const PlaceOrder = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartEmptied = useSelector((state) => state.cart.isCartEmptied); 
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isCartEmptied || cartItems.length === 0) {
    return <EmptyCart />;
  }

  const handlePlaceOrder = () => {
    const order = {
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };
  
    dispatch(addOrder(order));
    dispatch(clearCart());
    navigate('/place'); 
  };


  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }
  

  return (
    <div>
      <div className='placeorder-container'>
        <div className='placeorder-navbar'>
          <nav>
            <img src={logo} alt="logo" className="placeorder-logo" />
          </nav>
        </div>

        <div className='placeorder-body'>

          <div className='placeorder-itemlist'>
            <div className='placeorder-details'>
             <div className='no'>1</div>
             <div className='person-login'>
              <h3>LOGIN</h3>
              <p>XXYYZZ</p>
             </div>
              <button>Change</button>
            </div>

            <div className='placeorder-address'>
            <div className='placeorder-adddetails'>
             <div className='no2'>2</div>
             <div className='place-login'>
             <h3>DELIVERY ADDRESS</h3>
             <p>Deliver to: <span>Chennai - 600063</span></p>
             </div>
              <button>Change</button>
            </div>
            </div>

            <div className='placeorder-products'>
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <div className='placeorder-item'>
                        <img src={item.image} className='placeorder-img' alt='product' />
                        <div>
                          <p>{item.title}</p>
                          <span className='placeorder-seller'>Seller: Online</span>
                          <img src={kart} alt='kart' className='placeorder-kart' />
                          <p className='placeorder-cost'>
                            <span className='placeorder-original'>$200.00</span> ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className='placeorder-controls'>
                        <div className="placeorder-quantity">
                          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                          <div>{item.quantity}</div>
                          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                        </div>
                        <button onClick={() => handleRemoveFromCart(item.id)} className='placeorder-remove'>REMOVE</button>
                      </div>

                      {cartItems.length > 1 ? <hr /> : " "}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className='placeorder-action'>
              <button onClick={handlePlaceOrder}>CONTINUE</button>
            </div>
          </div>

          <div className='placeorder-summary'>
            <div className='placeorder-pricebox'>
              <p>PRICE DETAILS</p>
              <hr />
              <p>Price ({totalQuantity} items) <span>$200.00</span></p>
              <p>Discount <span>- $100.00</span></p>
              <p>Delivery Charges <span className='placeorder-delivery'>$10 </span> <span className='placeorder-free'>Free</span></p>
              <p>Protect Promise Fee <span>$0</span></p>
              <hr />
              <p>TOTAL AMOUNT: <span>${totalPrice.toFixed(2)}</span></p>
              <hr />
              <p>You will save $100.00 on this order</p>
            </div>

            <p className='placeorder-safe'>
              <span>
                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg' alt='secure' />
              </span>
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
