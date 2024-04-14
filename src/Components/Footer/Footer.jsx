import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src="/assets/logo_big.png" alt="" />
        <p>SHOPEE</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src="/assets/instagram_icon.png" alt="" />
        </div>
        <div className="footer-icons-container">
            <img src="/assets/pintester_icon.png" alt="" />
        </div>
        <div className="footer-icons-container">
            <img src="/assets/whatsapp_icon.png" alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}
