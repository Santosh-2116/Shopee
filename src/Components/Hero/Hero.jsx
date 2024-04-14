import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <>
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <p>new</p>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        
        <div className="hero-latest-btn">
          <button>Latest Collection <img src="/assets/arrow.png" alt="" /></button>
        </div>
      </div>
      

      <div className="hero-right">
        <img src="/assets/hero_image.png" alt="" />
      </div>
    </div>
    </>
  )
}
