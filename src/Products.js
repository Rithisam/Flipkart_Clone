import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './App.css';
import Footer from './footer';


export default function Products() {
    const[product,setProduct]=useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(data=>setProduct(data))
 },[]);

 

 const navigate = useNavigate();

  const handleImageClick = (category) => {
    navigate(`/Filter/${category}`);
  };

  return (
    <div>
     <div className='cloth-container'>
       
       <div className='mens-clothing'>
       <h2>Mens's clothing</h2>
       <ul>
        {product.map (item => item.category=== "men's clothing"?(
        <li key={item.id}>
         <img src={item.image} alt='dress'  onClick={() => handleImageClick(item.category)}/>
         <p>{item.title}</p>
         <h4>From ${item.price}</h4>
        </li> 
       ):null)}</ul>
       </div>
 
       <div className='womens-clothing'>
       <h2>women's clothing</h2>
       <ul>{product.map (item => item.category=== "women's clothing"?(
        <li key={item.id}>
         <img src={item.image} alt='dress' onClick={()=>handleImageClick(item.category)}/>
         <p>{item.title}</p>
         <h4>From ${item.price}</h4>
        </li> 
       ):null)}</ul>
       </div>
 
       <div className='womens-clothing'>
       <h2>Jewelery</h2>
       <ul>{product.map (item => item.category=== "jewelery"?(
        <li key={item.id}>
         <img src={item.image} alt='dress' onClick={()=>handleImageClick(item.category)}/>
         <p>{item.title}</p>
         <h4>From ${item.price}</h4>
        </li> 
       ):null)}</ul>
       </div>
 
       <div className='electronics'>
       <h2>Electronics</h2>
       <ul>{product.map (item => item.category=== "electronics"?(
        <li key={item.id}>
         <img src={item.image} alt='dress' onClick={()=>handleImageClick(item.category)}/>
         <p>{item.title}</p>
         <h4>From ${item.price}</h4>
        </li> 
       ):null)}</ul>
       </div>
       
     </div>
     <Footer/>
     </div>
     
     
   )
  
}
