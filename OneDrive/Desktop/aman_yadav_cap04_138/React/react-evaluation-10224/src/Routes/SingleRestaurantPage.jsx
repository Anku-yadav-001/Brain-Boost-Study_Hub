import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantPage() {
   let {id}=useParams()
   let [restData,setRestData]=useState({})
   let [loading,setLoading]=useState(false)
   
   async function getSingleData(){
    try {
      setLoading(true)
      let response=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
      let ans=await response.json()
      setRestData(ans.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
   }
    let {name,rating,type,number_of_votes,price_starts_from,image}=restData;
   useEffect(function(){
        getSingleData()
   },[])
   if(loading){
    return <h1>Loading...</h1>
   }
  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{type}</div>
      <div data-testid="restaurant-rating">Rating:{rating}</div>
      <div data-testid="restaurant-votes">Votes:{number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price:{price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} src={image} alt={name}/>
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
