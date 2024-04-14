import React from 'react'
import './CSS/ShopCategory.css'
import Item from '../Components/Items/Item'
import { useSelector } from 'react-redux'

export default function ShopCategory({banner,category}) {
  const all_product=useSelector(store=>store.allProduct)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src="/assets/dropdown_icon.png" alt="" />
        </div>
      </div>
      <div className="shopcategory-products-wrapper">
        <div className="shopcategory-products">
          {all_product.map(item=>{
            if(category===item.category){
              return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }else{
              return null;
            }
          })}
        </div>
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
