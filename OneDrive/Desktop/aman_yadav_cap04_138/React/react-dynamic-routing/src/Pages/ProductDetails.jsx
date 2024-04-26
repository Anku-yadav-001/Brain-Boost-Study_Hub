import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    let {id}=useParams()
    let [product,setProduct]=useState(null)
    useEffect(()=>{
      fetch(`http://localhost:8080/products/${id}`).then(response=>response.json()).then(data=>setProduct(data));
    },[id])

    if(!product){
      return <>Loading...</>
    }
  return (
    <div data-testid = "product-details" >
      <div>
      {/* show product details here */}
      <div>{product.id}</div>
      <div data-testid="product_name">{product.name}</div>
      <div data-testid="product_price">{product.price}</div>
      </div>
    </div>
  )
}
