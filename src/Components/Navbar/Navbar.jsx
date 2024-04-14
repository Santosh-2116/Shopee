import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { activeNavLinkSliceActions } from '../../Store/activeNavLinkSlice';

export default function Navbar() {
    const menu=useSelector(store=>store.activeNavLink);
    const cartItems=useSelector(store=>store.cartProduct);
    const dispatch=useDispatch();
    const totalCartProducts=()=>{
      let total=0
      for(const item in cartItems){
          total+=cartItems[item]
      }
      return total;
}
  return (
    <div className='navbar'>
      <Link to={"/"} style={{textDecoration: 'none'}}><div className="nav-logo" onClick={()=>{dispatch(activeNavLinkSliceActions.setMenu("SHOP"))}}>
        <div><img src="/assets/logo.png" alt="" /></div>
        <p>SHOPEE</p>
      </div></Link>
      <ul className='nav-menu'>
        <li onClick={(e)=>{dispatch(activeNavLinkSliceActions.setMenu(e.target.innerText))}}><Link style={{color:"#626262",textDecoration: 'none'}} to='/'> Shop {menu==="SHOP"&&<hr/>}</Link></li>
        <li onClick={(e)=>{dispatch(activeNavLinkSliceActions.setMenu(e.target.innerText))}}><Link style={{color:"#626262",textDecoration: 'none'}} to='/mens'> Men {menu==="MEN"&&<hr/>}</Link></li>
        <li onClick={(e)=>{dispatch(activeNavLinkSliceActions.setMenu(e.target.innerText))}}><Link style={{color:"#626262",textDecoration: 'none'}} to='/womens'> Women {menu==="WOMEN"&&<hr/>}</Link></li>
        <li onClick={(e)=>{dispatch(activeNavLinkSliceActions.setMenu(e.target.innerText))}}><Link style={{color:"#626262",textDecoration: 'none'}} to='/kids'> Kids {menu==="KIDS"&&<hr/>}</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button onClick={()=>{dispatch(activeNavLinkSliceActions.setMenu(""))}}>Login</button></Link>
        <Link to='/cart'><img className='cart-img' src="/assets/cart_icon.png" alt="" onClick={()=>{dispatch(activeNavLinkSliceActions.setMenu(""))}} /></Link>
        <div className="cart-count">{totalCartProducts()}</div>
      </div>
    </div>
  )
}
