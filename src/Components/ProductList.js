import React from 'react'
import productItem from '../Assets/Images/heroimage.jpeg'
function ProductList ({product,addToCart})  {
  return (
    <div className='flex'>
     {
      product.map((productItem, productIndex)=>{
        return(
          <div style={{width: '40%' }}>
          <div className='padding-item'>
            <img src={productItem.url} width="100%"/>
            <p>{productItem.name}|{productItem.category}</p>
            <p>{productItem.quantity}</p>
            <p>{productItem.price}</p>
            <button className='button' onClick={()=> addToCart(productItem)}>Add to cart</button>
          </div>
            
          </div>
        )
      })
     }
    </div>
  )
}

export default ProductList
