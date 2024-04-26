import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const AllRoutes = () => {
  return <div>{/* Add Routes here */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  </div>;
};

export default AllRoutes;
