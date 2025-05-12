import React, { useEffect,useState } from 'react'
import './App.css';
import logo from './images/logo1.png'
import grocery from './images/grocery-store.png'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';  
import { addToCart } from './CartActions'; 
import { useNavigate } from 'react-router-dom';
import star from './images/star.png'
import kart from './images/kart-logo.png'
import coupon from './images/points.png'
import offer from './images/offer.png'
import Footer from './footer';



export default function Description() {
  const {id}=useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>setProduct(data))
  },[id]);
  
  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
    navigate('/cart'); 
  };

  const handlePlaceOrder = () => {
    dispatch(addToCart(product)); 
    navigate(`/order`);
  };
  
  return (
    <div>
    <div className='description-container'>
       <div className='desc-navbar'>
      
          <nav>
           <img src={logo} alt="flipkart-logo" className='logo' />
           <input type='text' placeholder='Search for Products, Brands and More'/>
           <button>Log in</button>
           <p>Become a Seller</p>

     <p>More</p>
      <div className='cart-container' >
      <img src={grocery} alt='cart-logo' className='cart-logo'/>
      <p>Cart</p>
      </div>
     
     
      </nav>
    </div>
     <div className='menu-container'>
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


  <div className='product-details'>
    <div className='image-container'>
       <div className='product-image'>
       
       <img src={product.image} alt='dress'/>
       
       </div>
       <div className='add-buy'>
       <button onClick={handleAddToCart} className='add-cart'>ADD TO CART</button>
       <button className='buy-now' onClick={()=>handlePlaceOrder()}>BUY NOW</button>
       </div>
       </div>
       <div className='product-desc'>
        
       <h3>{product.title}</h3>
       
       
       <div className='rating-count'>
        <div className='review'>
         <p>{product.rating.rate}</p>
         <img src={star} alt='star'/>
        </div>
        
        <p className='count'> {product.rating.count} Ratings & 124 Reviews</p>
        <img src={kart} alt='kart' className='kart'/>
        
       </div>

       <div className='price'>
        <h1>${product.price}</h1>
        <p>
        + ₹19 Protect Promise Fee <span>Learn more</span> 
        </p>
        <p> Secure delivery by 29 Apr, Tuesday</p>
        <p className='hurry'>Hurry, Only few left!</p>
        <h4>Coupons for you</h4>
        <div className='coupon'>
        <img src={coupon} alt='coupon'/>
        <p><span>Partner Offer</span> Buy this & get 5% off upto ₹750 on furniture, Only for you! <span className='konw'>Know More</span></p>
        </div>
        <h4>Available offers</h4>
        <div className='offers'>
          <div className='offer'>
            <img src={offer}/>
            <p>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
          </div>
          <div className='offer'>
            <img src={offer}/>
            <p>Bank Offer10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&C</p>
          </div>
          
          <div className='offer'>
             <img src={offer}/>
             <p>Bank Offer10% off up to ₹1,000 on all Axis Bank Credit Card (incl. migrated ones) EMI Txns of ₹7,490 and aboveT&C</p>
          </div>
          <div >
            <h4>
              Description
            </h4>
            <p>{product.description}</p>
          </div>
        </div>
       </div>
        
      
       </div>
       
      
       
     </div>
     <Footer/>
     
    </div>
     
    </div>
  )
}
