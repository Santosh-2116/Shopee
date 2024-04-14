import React from 'react'
import './RelatedProducts.css'
import popular_product from '../../../public/assets/popular_product'
import Item from '../Items/Item'

export default function RelatedProducts() {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {popular_product.map(item=><Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)}
      </div>
    </div>
  )
}
