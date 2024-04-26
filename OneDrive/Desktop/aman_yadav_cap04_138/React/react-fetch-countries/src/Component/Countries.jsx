import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesRow";
import  Pagination from "./Pagination"

function Countries() {
   let [countriesData,setCountriesData]=useState([]);
   let [loading,isLoading]=useState(true);
   let [currentPage,setCurrentPage]=useState(1);
   let [totalPages,setTotalPages]=useState(0);

   async function fetchCountriesData(){
      isLoading(true);
      try {
        let response=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${currentPage}&limit=10&orderBy=desc`);
        let output=await response.json();
        setCountriesData(output.data);
        setTotalPages(output.totalPages);
      } catch (error) {
        console.log(error);
      }
      isLoading(false)
   }
   useEffect(function(){
    fetchCountriesData();

   },[currentPage])

let changePages=(page)=>{
  setCurrentPage(page)
}


  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      {loading?(<LoadingIndicator/>):(<div><table>
        <thead>
          <tr>
            <th>ID</th>
            <th>COUNTRY</th>
            <th>POPULATION</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody data-testid="countries-container">
          {/* Show the CountriesRow here  */}
          {countriesData.map((ele)=>(
            <CountriesCard key={ele.id} id={ele.id} country={ele.country} Rank={ele.Rank} population={ele.population}/>
          ))}
        </tbody>
      </table>
      <div>{/* Pagination */}
      <Pagination currentPages={currentPage} totalPages={totalPages} onChange={changePages}/>      
      </div></div>)}
    </div>
  );
}

export default Countries;
