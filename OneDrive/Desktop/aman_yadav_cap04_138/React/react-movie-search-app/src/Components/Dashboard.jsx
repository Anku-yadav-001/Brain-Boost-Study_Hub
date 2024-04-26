import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  let [search,setSearch]=useState("")
  let [movies,setMovies]=useState([])
  
  async function fetchData(){
    try {
      await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?q=${search}`).then((response)=>{
       console.log("trrrr");
        setMovies(response.data)
      })
    } catch (error) {
      console.log(error);
   
    }
  }
  useEffect(function(){
     let debounceData=setTimeout(function(){
     
        fetchData()
     },1000)
     return ()=>clearTimeout(debounceData)
  },[search])
  return (
    <div data-testid="dashboard">
      {/* Add input tag here  */}
      <input type="text" data-testid="search_key" placeholder="Search Movies" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <div data-testid="movie_results">
        {movies.map((ele)=>{
          return (
            <div className="movie-card" key={ele.id}>
                <h3>Title: {ele.title}</h3>
                <p>Year: {ele.year}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Dashboard;
