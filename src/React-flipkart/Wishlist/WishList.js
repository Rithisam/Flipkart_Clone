
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from './WishlistActions';
import dust from '../images/dustbin.png';

import '../../App.css';

const WishList = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  if (wishlistItems.length === 0) {
    return (
    <div className="wishlist-empty-container">
      <div className="wishlist-empty-box">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/mywishlist-empty_39f7a5.png"
          alt="Empty Wishlist"
          className="wishlist-empty-image"
        />
        <h2 className="wishlist-empty-title">Empty Wishlist</h2>
        <p className="wishlist-empty-message">
          You have no items in your wishlist. Start adding!
        </p>
      </div>
    </div>);
  }

  return (
    <div>
      <h3>MY WISHLIST</h3>
   
      <ul className='wishlist-myproduct'>
        {wishlistItems.map((item) => (
          <li key={item.id}>
            <div> <hr></hr></div>
            
            <div className='wish-detail'>
              <div className='wish-pro'>
              <img src={item.image} alt={item.title}  className='wish-image' />
              <span>{item.title}</span>
              </div>
           
            <div className='dust-box'>
            <img src={dust} onClick={() => handleRemove(item.id)} className='dust-image'/>
            </div>
            
            </div>
            
           
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default WishList;
