import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
function PrivateRoute({children}) {

    let {isAuth}=useContext(AuthContext)
    return isAuth ? children :<Navigate to="/login"/>
}

export default PrivateRoute;
