import React,{ Route, Routes } from "react-router-dom";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  return <div className="App">
         <Routes>
          <Route path="/" element={<AllRoutes/>}/>
         </Routes>
  </div>;
}

export default App;
