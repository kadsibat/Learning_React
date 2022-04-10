import React,{createContext, useState} from 'react'


export const ProductContext=createContext()
const initialProducts=[
  {id:0,product:"basketball", price:12},
  {id:1,product:"baseball", price:9},
  {id:2,product:"tennis", price:89}
]

export const ProductProvider = (props)=>{
  const [products, setProducts] = useState(initialProducts)


  const increasePrice=(id)=>{
    // const newProducts=[...products];
    console.log("increaseprice",id);
 
    const newProducts=[...products];
    newProducts[id].price +=1
    setProducts(newProducts)
}
const decreasePrice=(id)=>{
    console.log("decreaseprice",id);
    const newProducts=[...products];
    newProducts[id].price-=1
    setProducts(newProducts)
}
return(
  <ProductContext.Provider value={{products,setProducts,increasePrice,decreasePrice}}>
    {props.children}
  </ProductContext.Provider>
)




}