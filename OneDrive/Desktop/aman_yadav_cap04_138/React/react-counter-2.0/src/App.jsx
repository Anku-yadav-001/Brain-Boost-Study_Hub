import React, { useState } from "react";
  function App() {
	var [count,setCount]=useState(0);
  function isPrime(number){
	if (number <= 1){ return false;}
	if (number == 2){ return true;}
	if (number % 2 == 0){ return false;}
	for (let i = 3; i <= Math.sqrt(number); i=i+2) {
	  if (number % i == 0){ return false;}
	}
	return true;
  };

	return (
	  <div style={{border:"2px solid red",width:"35%",textAlign:"center",fontFamily:"system-ui",marginLeft:"30%",color:"red",background:"pink"}}>
		<div>
		  <button className="minusonebtn" onClick={()=>setCount(count-1)} disabled={count==0} style={{padding:"10px",fontFamily:"system-ui",backgroundColor:"pink",margin:"5px",borderRadius:"5px",background:"yellow"}}>-1</button>
		  <button className="plusonebtn" onClick={()=>setCount(count+1)} style={{padding:"10px",fontFamily:"system-ui",backgroundColor:"pink",margin:"5px",borderRadius:"5px",background:"yellow"}}>+1</button>
		<div>
		  <button className="resetbtn" onClick={()=>setCount(count=0)} style={{padding:"10px",fontFamily:"system-ui",backgroundColor:"pink",margin:"5px",borderRadius:"5px",background:"yellow"}}>Reset Count</button>
		</div>
		</div>
		<span className="counter" style={{fontSize:"25px",fontWeight:"bold"}}>Count:{count}</span>
		<div>
		  <span className="odd-or-even" style={{fontSize:"20px",padding:"10px",fontFamily:"system-ui",margin:"5px",fontWeight:"bold"}}>The Number is:{count%2==0?("Even"):("Odd")}</span><br/>
		  <span className="is-prime" style={{fontSize:"20px",padding:"10px",fontFamily:"system-ui",margin:"5px",fontWeight:"bold"}} >Prime Number:{isPrime(count)?("true"):("false")}</span>
		</div>
	  </div>
	);
  
  }
  
  export default App;
  