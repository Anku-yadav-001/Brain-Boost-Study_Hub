import {useState,useEffect} from "react"
import { Link } from "react-router-dom";

const ProductCard = () => {
 
  let [data,setData]=useState([])
  async function getData(){
   
    let response= await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
    let answer=await response.json()
    setData(answer)
  }
 useEffect(function(){
  getData()
 },[])
 
  return <div data-testid="product-card">
         {
          data.map((ele)=>{
            return (<>
           <Link to='/product/:id/view'>
           <div>
              <img src={ele.images[0]} alt="" />
              <p>Price: {ele.price}</p>
              <h3>{ele.title}</h3>
              <p>{ele.location}</p>
            </div>
           </Link>
            </>)
          })
         }
  </div>;
};

export default ProductCard;
