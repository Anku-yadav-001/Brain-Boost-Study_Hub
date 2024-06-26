import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../Context/AuthContext"
function PrivateRoute({children}) {

    let {isAuth}=useContext(AuthContext)
    return isAuth ? children : <Navigate to="/login"/>
}

export default PrivateRoute;
