import React, { useEffect, useState } from 'react'

export default function Products() {
       let [products,setProducts]=useState([]);
       useEffect(()=>{
        fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products').then(response=>response.json()).then(data=>setProducts(data.data));
       },[])
  return (
    <div>
      <h1 >All Products</h1 >
      <div className= "products-wrapper">
         <div>
            {/* Map the below div agaisnt your product data */}
            {products.map(product=>(
                <div key={product.id} style={{border:"2px solid black"}}>
                    <div className = "id" >{product.id} </div>
                    <h3 className = "title" >{product.title} </h3>
                    <div className = "category" >{product.category} </div>
                    <div className = "price" >{product.price} </div>
                  </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}