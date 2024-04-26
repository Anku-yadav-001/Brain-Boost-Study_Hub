import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
      
const AllRoutes = () => {
  return <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id/view' element={<ProductDetailsPage/>}/>
      </Routes>
  </div>;
};

export default AllRoutes;
