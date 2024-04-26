import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import RestaurantTable from"../Components/RestaurantTable"
import Pagination from "../Components/Pagination"

function Dashboard() {
  let {token,setToken,setIsAuth}=useContext(AuthContext)
  let [restaurantList,setRestautantList]=useState([])
  let [page,setPage]=useState(1)
  let [totalPage,setTotalPage]=useState(0)
  let [loading,setLoading]=useState(false)

  function resetLogin(){
        setIsAuth(false)
        setToken(null)
  }

  async function fetchData(){
    try {
      setLoading(true)
      let response =await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`)
      let result=await response.json()
      setRestautantList(result.data)
      setTotalPage(result.totalPages)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(function(){
    fetchData()
  },[page])


  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={resetLogin}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={restaurantList}/>
      </div>
      <div data-testid="pagination-container">
        <Pagination totalPages={totalPage} currentPage={page} handlePageChange={(newpage)=>setPage(newpage)} />
      </div>
    </div>
  );
}

export default Dashboard;
