import React, { useState } from 'react'
import ProductList from './ProductList'

const initialProducts=[
    {id:0,product:"basketball", price:12.99},
    {id:1,product:"baseball", price:9.99},
    {id:2,product:"tennis", price:89.99}
]

const WithPropsApp = () => {
    const [products, setProducts] = useState(initialProducts)
    // console.log(products)

const increasePrice=(e)=>{
    // const newProducts=[...products];
    console.log("increaseprice",e.target.id);
 
    const newProducts=[...products];
    newProducts[e.target.id].price=newProducts[e.target.id].price+1
    setProducts(newProducts)
}
const decreasePrice=(e)=>{
    console.log("decreaseprice",e.target.id);
    const newProducts=[...products];
    newProducts[e.target.id].price=newProducts[e.target.id].price-1
    setProducts(newProducts)
}


   
  return (
    <div>
      <h3>WithPropsApp</h3>
      <ProductList products={products}
       increasePrice={increasePrice}
       decreasePrice={decreasePrice}/>
    </div>
  )
}

export default WithPropsApp
