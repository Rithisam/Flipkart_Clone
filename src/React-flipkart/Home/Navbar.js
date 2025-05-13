import React, { useState } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
import '../../App.css';

import flipkartlogo from '../images/flipkart-logo.jpg';
import cart from '../images/shopping-cart.png';
import shop from '../images/shopping-store.png';
import kilo from '../images/kilo.png';
import mobile from '../images/mobile.png';
import fashion from '../images/fashion.png';
import laptop from '../images/laptop.png';
import furniture from '../images/furniture.png';
import appli from '../images/appliances.jpeg';
import plane from '../images/flight.png';
import toys from '../images/toys.png';
import bike from '../images/bike.png';
import profile from '../images/user.png';
import searchIcon from '../images/search.png';
import more from '../images/more.png';
import ImageSlider from './Imageslide';
import Products from './Products';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  
  const isLoggedIn = location.state?.isLoggedIn || false;

  const handleCart = () => {
    navigate('/cart');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleProfileClick = () =>{
    navigate(`/profile`);
  }
  
  const handleMyOrde = () =>{
    navigate(`/myorder`);
  }
  
  const handleWishlist = ()=>{
    navigate(`wishlist`);
  } 
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/Filter/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='container'>
      <div className='navbar-container'>
        <nav>
          <img src={flipkartlogo} alt="flipkart-logo" className='logo-img' />
          <div className='search-container'>
            <img
              src={searchIcon}
              alt='search-logo'
              className='search-logo'
              onClick={handleSearch}
              style={{ cursor: 'pointer' }}
            />
            <input
              type='text'
              placeholder='Search for Products, Brands and More'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className='profile-container'>
            <img src={profile} alt='user-logo' className='profile-logo' />
            {isLoggedIn ? (
                  <div className="account-wrapper">
                  <p className="account-label">Account</p>
                  <div className="dropdown-menu">
                    <ul>
                      <li onClick={handleProfileClick}><img src={profile} alt='user-logo'/>My Profile</li>
                      <li onClick={handleMyOrde}><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg'/>Orders</li>
                      <li onClick={handleWishlist}><img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='/>Wishlist</li>
                      <li><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logout-e63ddf.svg'/>Logout</li>
                    </ul>
                  </div>
                </div>
            
            ) : (
              <p onClick={handleLoginClick}>Log in</p>
            )}
            
          </div>

          <div className='cart-container' onClick={handleCart}>
            <img src={cart} alt='cart-logo' className='cart-logo' />
            <p>Cart</p>
          </div>

          <div className='shop-container' >
            <img src={shop} alt='shop-logo' className='shop-logo' />
            <p>Become a Seller</p>
          </div>

          <img src={more} alt='more-logo' className='more-logo' />
        </nav>
      </div>

      <div className='category-container'>
        <div className='kilo-container'>
          <img src={kilo} alt='logo' className='kilo-img' />
          <h4>Kilos</h4>
        </div>
        <div className='mobile-container'>
          <img src={mobile} alt='mobile-logo' className='mobile-img' />
          <h4>Mobiles</h4>
        </div>
        <div className='fashion-container'>
          <img src={fashion} alt='fashion-logo' className='fashion-img' />
          <div className='text'>
            <h4>Fashion</h4>
          </div>
        </div>
        <div className='laptop-container'>
          <img src={laptop} alt='laptop-logo' className='laptop-img' />
          <h4>Electronics</h4>
        </div>
        <div className='furn-container'>
          <img src={furniture} alt='furn-logo' className='furn-img' />
          <h4>Home & Furniture</h4>
        </div>
        <div className='appl-container'>
          <img src={appli} alt='app-logo' className='app-img' />
          <h4>Appliances</h4>
        </div>
        <div className='plane-container'>
          <img src={plane} alt='plane-logo' className='plane-img' />
          <h4>Flight Bookings</h4>
        </div>
        <div className='toys-container'>
          <img src={toys} alt='toys-logo' className='toys-img' />
          <h4>Beauty, Toys & More</h4>
        </div>
        <div className='bike-container'>
          <img src={bike} alt='bike-logo' className='bike-img' />
          <h4>Two Wheelers</h4>
        </div>
      </div>

      <ImageSlider />
      <Products searchTerm={searchTerm} />
    </div>
  );
}
