import React from 'react'
import Product from '../pages/Product'

const Name = () => {
    const arr=[{ProductName: "Product 1", Price: 100, StockStatus: "In Stock"}, 
        {ProductName: "Product 2", Price: 200, StockStatus: "Out of Stock"}]
  return (
    <>
    <Product  array={arr}/>
    </>
  )
} 

export default Name