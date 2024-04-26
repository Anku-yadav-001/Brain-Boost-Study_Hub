import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function AllProducts() {
        let [product,setProduct]=useState([]);
        useEffect(()=>{
          fetch(`http://localhost:8080/products/`).then(response=>response.json()).then(data=>setProduct(data))
        },[])
  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
      <ul>
        {product.map(product=>(
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div>{product.id}</div>
              <div data-testid="product_name">{product.name}</div>
              <div data-testid="product_price">{product.price}</div>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}
