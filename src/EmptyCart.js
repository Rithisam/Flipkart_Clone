import React from "react";
import './App.css';
import logo from './images/logo1.png'
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {

  const navigate = useNavigate();

  const handleHomePage=()=>{
    navigate(`/`);
  }
  return (
    <>
    <div className="empty-container" style={{background:'rgb(233, 235, 237)' , width:'100%' , height:'100vh',boxSizing:'border-box' }}>
      <div className='cart-navbar'>
          <nav>
          <img src={logo} alt="logo" className="fliplogoimg" />
          <input type="text" placeholder="Search for Products, Brands and More" />
          
          </nav>
          <p>Log in</p>
        </div>
      <div className="empty-cart">
        <div className="empty-cart__content">
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt="Empty Cart"
            className="empty-cart__image"
          />
          <h2 className="empty-cart__title">Your cart is empty!</h2>
          <p className="empty-cart__message">Add items to it now.</p>
          <button className="empty-cart__shop-btn" onClick={()=>handleHomePage()}>Shop now</button>
        </div>
      </div>

      <footer className="empty-cart__footer">
        <div className="footer__links">
          <a href="#">Policies: Returns Policy</a> |{" "}
          <a href="#">Terms of use</a> |{" "}
          <a href="#">Security</a> |{" "}
          <a href="#">Privacy</a>
          <span> @ 2007-2025 Flipkart.com</span>
        </div>
        <div className="footer__help">
          Need help? Visit the <a href="#">Help Center</a> or{" "}
          <a href="#">Contact Us</a>
        </div>
      </footer>
      </div>
    </>
  );
};

export default EmptyCart;
