import { useEffect, useState } from "react"
import Loader from "../Components/Loader"
import { useParams } from "react-router-dom"

function SingleProductPage(){
    let [restData,setRestData]=useState({})
    let [loading,setLoading]=useState(false)
    let {id}=useParams()

    async function forSinglepage(){
        try {
            setLoading(true)
            let response=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
            let answer=await response.json()
            setRestData(answer.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }
    useEffect(function(){
        forSinglepage()
    },[])
    let {brand,img,details,category,price}=restData

    if(loading){
        return (
            <Loader/>
        )
    }
    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">{brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" src={img} alt={brand} width="150px" height="150px"/>
            </div>
            <div data-testid="product-category">
                Category: {category}
            </div>
           
            <div data-testid="product-details">
                Details: {details}
            </div>
            <div data-testid="product-price">
                Price:{price}
            </div>

            </div>
    )
}
export default SingleProductPage