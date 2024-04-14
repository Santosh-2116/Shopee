import React from 'react'
import './Item.css'
import { NavLink } from 'react-router-dom'

export default function Item(props) {
  return (
    <div className='item'>
      <NavLink onClick={window.scrollTo(0,0)} to={`/product/${props.id}`}><img className='popular-image' src={props.image} alt="" /></NavLink>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}
