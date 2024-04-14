import React from 'react'
import './CartItems.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartProductActions } from '../../Store/cartProduct'
import CartSummary from './CartSummary'

export default function CartItems() {
  const all_product=useSelector(store=>store.allProduct)
  const cartItems=useSelector(store=>store.cartProduct)
  const dispatch=useDispatch()
  return (
    <div className='cartitems'>
      <table style={{textAlign:"center"}}>
        <thead>
          <tr className="cartitems-format-main">
            <th>Prodcuts</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
        {all_product.map(e=>{
          if(cartItems[e.id]){
              {
                  return <tr key={e.id} className="cartitems-format cartitems-format-main">
                          <td><img src={e.image} alt="" className='carticon-product-icon'/></td>
                          <td>{e.name}</td>
                          <td>${e.new_price}</td>
                          <td className='cartitems-quantity'>{cartItems[e.id]}</td>
                          <td>${e.new_price*cartItems[e.id]}</td>
                          <td><img className='cartitems-remove-icon' src="/assets/cart_cross_icon.png" alt="" onClick={()=>{dispatch(cartProductActions.removeFromcart(e.id))}} /></td>
                      </tr>
              }
          }
          return null;
        })}
        </tbody>
      </table>
      <hr />
      <CartSummary/>
  </div>
  )
}
