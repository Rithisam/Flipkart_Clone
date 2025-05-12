import React , {useState}from 'react'
import './App.css';
import logo from './images/logo1.png'
import grocery from './images/grocery-store.png'
import WhishList from './WhishList';

import { useNavigate } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';


export default function Wishlistcontainer() {
  const [activeSection, setActiveSection] = useState('wishlist'); // default section
  const navigate = useNavigate();

  

  const renderSection = () => {
    switch (activeSection) {
      case 'wishlist':
        return <WhishList/>;
      case 'personalinfo':
        return <PersonalInfo/>
      
      default:
        return <div>Select an option</div>;
    }
  };

  const handlemyorders = () =>{
  navigate(`/myorder`);
  }

 

  
  return (
    <div>
      <div className='profile-wrapper'>
      <div className='navbar-wrapper'>
      <nav>
      <img src={logo} alt="flipkart-logo" className='logo-image' />
      <input type='text' placeholder='Search for Products, Brands and More' className='search-input' />
      <button className='login-button'>LOG IN</button>
      <p className='seller-link'>Become a Seller</p>
      <p className='more-link'>More</p>
      <div className='cart-wrapper'>
        <img src={grocery} alt='cart-logo' className='cart-icon' />
        <p className='cart-text'>Cart</p>
      </div>
    </nav>
  </div>

  <div className='category-menu'>
      <h5>Electronics</h5>
      <h5>TVs & Appliances</h5>
      <h5>Men</h5>
      <h5>Women</h5>
      <h5>Baby & Kids</h5>
      <h5>Home & Furniture</h5>
      <h5>Sports, Books & More</h5>
      <h5>Flights</h5>
      <h5>Offer Zone</h5>
      <h5>Grocery</h5>
     </div>
 

   <div className='my-profile'>
    <div className='information'>
      <div className='profile-name'>
        <div>
        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg'/>
        </div>
        <div className='hello'>
        <p>Hello</p>
        <h4>XXXYYY</h4>
        </div>
        
      </div>
      <div className='profile-account'>
         <div className='my-order'>
          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg=='/>
           <p onClick={handlemyorders}>MY ORDERS</p>
         </div>
         <hr></hr>
         <div className='settings'>
          <div className='image-account'>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4='/>
            <p>ACCOUNT SETTINGS</p>
          </div>
           
           <div className='account-choice'>
             <p onClick={() => setActiveSection('personalinfo')}>Profile Information</p>
           </div>
         </div>
         <hr></hr>
       
        

         <div className='my-stuff'>
           <div className='profile-stuff'>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIzIDE5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjUgMi43NWgtOUw5LjI1LjVIMi41QTIuMjQ3IDIuMjQ3IDAgMCAwIC4yNiAyLjc1bC0uMDEgMTMuNUEyLjI1NyAyLjI1NyAwIDAgMCAyLjUgMTguNWgxOGEyLjI1NyAyLjI1NyAwIDAgMCAyLjI1LTIuMjVWNWEyLjI1NyAyLjI1NyAwIDAgMC0yLjI1LTIuMjV6bS01LjYyNSAzLjM3NWEyLjI1NyAyLjI1NyAwIDAgMSAyLjI1IDIuMjUgMi4yNTcgMi4yNTcgMCAwIDEtMi4yNSAyLjI1IDIuMjU3IDIuMjU3IDAgMCAxLTIuMjUtMi4yNSAyLjI1NyAyLjI1NyAwIDAgMSAyLjI1LTIuMjV6bTQuNSA5aC05VjE0YzAtMS40OTYgMy4wMDQtMi4yNSA0LjUtMi4yNXM0LjUuNzU0IDQuNSAyLjI1djEuMTI1eiIvPjxwYXRoIGQ9Ik0tMi00aDI3djI3SC0yeiIvPjwvZz48L3N2Zz4='/>
             <p>MY STUFF</p>
           </div>
           <p className='mystuff' onClick={() => setActiveSection('wishlist')}>My Wishlist</p>
         </div>
        
      </div>
    </div>
    <div className='profile-form'>
    {renderSection()}
    </div>
   </div>
</div>

      
    </div>

  )
}
