import React, { useEffect, useState } from 'react'

export default function AllProducts() {
      let [restData,setRestData]=useState([])
      async function fetchData(){
        try {
          let response=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
          let answer=await response.json()
          setRestData(answer.data)
          console.log(restData);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(function(){
          fetchData()
      },[])
  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper">
          {/* Map the below div against product data */}
          {restData.map((items)=>{
              return <div key={items.id} style={{border:"2px solid black",padding:"10px",}}>
              <h2>{items.title}</h2>
              <p>{items.brand}</p>
              <p>{items.price}</p>
          </div>
})}
            <div>
                <h3 className = "name"> </h3>
                <div className= "brand"></div>
                <div className = "price"></div>
            </div>
      </div>
    </div>
  )
}