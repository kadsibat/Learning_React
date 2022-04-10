import React, { useContext } from 'react'
import { ProductContext } from './productContext'


const Product = ({product}) => {
    const {increasePrice,decreasePrice} = useContext(ProductContext)
   
  return (
    <div>
        <h1>{product.product}</h1>
        <h2>{product.price}</h2>
        <button onClick={()=>increasePrice(product.id)}>ıncrease</button>
        <button onClick={()=>decreasePrice(product.id)}>decrease</button>
    </div>
  )
}

export default Product