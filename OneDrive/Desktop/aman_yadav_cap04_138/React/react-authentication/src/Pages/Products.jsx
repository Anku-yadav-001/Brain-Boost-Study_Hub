import React, { useState ,useEffect} from 'react'

export default function AllProducts() {
    let [products,setProducts]=useState([]);
    useEffect(()=>{
      fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products').then(response=>response.json()).then(data=>setProducts(data.data));
     },[])
  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper">
          {/* Map the below div against product data */}
            {products.map(product=>(
                <div key={product.id} style={{border:"2px solid black"}}>
                    <h3 className = "name">{product.title} </h3>
                <div className= "brand">{product.brand}</div>
                <div className = "price">{product.price}</div>
                  </div>
              ))
            }
      </div>
    </div>
  )
}