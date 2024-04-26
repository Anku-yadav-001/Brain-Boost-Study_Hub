import { useContext,useEffect,useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader"
import ProductsTable from "../Components/ProductsTable";
function Dashboard() {
  let {setIsAuth,setToken,token}=useContext(AuthContext)
  let [loading,setLoading]=useState(false)
  let [restData,setRestData]=useState([])
  async function fetchDetails() {
    try {
      setLoading(true)
      let response=await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/')
      let answer=await response.json()
      setRestData(answer.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  function logoutButton(){
    setIsAuth(false)
    setToken(null)
  }
  useEffect(function(){
    fetchDetails()
  },[])
  if(loading){
    return (
      <Loader/>
    )
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutButton}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable data={restData}/>
      </div>
    </div>
  );
}

export default Dashboard;
