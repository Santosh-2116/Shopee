import React from 'react'
import './Offer.css'

export default function Offer() {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1 style={{color:"#ff4141"}}>Offers</h1>
        <h1>For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src="/assets/exclusive_image.png" alt="" />
      </div>
    </div>
  )
}
