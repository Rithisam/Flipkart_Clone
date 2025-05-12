import React from 'react'
import { useNavigate } from 'react-router-dom';
import circle from './images/circle.png'


export default function OrderPlaced() {
  const navigate = useNavigate();

  const handleBack = ()=>{
    navigate(`/`);
  }
  return (
    <div>
      <div className='order-confirmed'>
        <img src={circle}/>
      <h1>Order Confirmed</h1>
      <p>Thank you for your purchase.</p>
      <button onClick={handleBack}>Continue Shopping!</button>
      </div>
      
    </div>
  )
}
