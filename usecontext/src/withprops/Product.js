import React from 'react'

const Product = ({product,increasePrice,decreasePrice}) => {
  return (
    <div>
        <h3> product</h3>
        <p>{product.price} $</p>
        <p>{product.product}</p>
        <button id={product.id}
        onClick={increasePrice}
        product>Increase</button>
     <button id={product.id}
        onClick={decreasePrice}
        product>Decrease</button>
    </div>
  )
}

export default Product
