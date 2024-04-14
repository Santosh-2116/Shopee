import React from 'react'
import './Popular.css'
import Item from '../Items/Item'
import { useSelector } from 'react-redux'

export default function Popular() {
  const popular_product=useSelector(store=>store.popularProduct);
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popular_product.map(item=><Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)}
      </div>
    </div>
  )
}
