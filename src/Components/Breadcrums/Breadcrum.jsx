import React from 'react'
import './Breadcrum.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Breadcrum({product}) {
  const menu=useSelector(store=>store.activeNavLink);
  const dispatch=useDispatch();
  console.log(product.category.toUpperCase())
  return (
    <div className='breadcrum'>
      <Link to={"/"} onClick={()=>{dispatch(activeNavLinkSliceActions.setMenu("SHOP"))}}>HOME</Link> 
      <img src="/assets/breadcrum_arrow.png" alt="" /> 
      <Link to={"/"} onClick={()=>{dispatch(activeNavLinkSliceActions.setMenu("SHOP"))}}>SHOP</Link> 
      <img src="/assets/breadcrum_arrow.png" alt="" /> 
      <Link to={"/"} onClick={()=>{dispatch(activeNavLinkSliceActions.setMenu(product.category.toUpperCase()))}}>{product.category}</Link> 
      <img src="/assets/breadcrum_arrow.png" alt="" /> 
      {product.name}
    </div>
  )
}
