import { useContext } from "react";
import { AuthContest } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";


function PrivateRoute({children}){
    let {isAuth}=useContext(AuthContest);
    return isAuth? children:<Navigate to="/"/>
}
export default PrivateRoute