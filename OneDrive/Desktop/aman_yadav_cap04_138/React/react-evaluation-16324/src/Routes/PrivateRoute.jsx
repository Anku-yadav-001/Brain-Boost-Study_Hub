import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Route, Navigate } from 'react-router-dom';
const PrivateRoute = ({ path, ...props }) => {
    let {authState}=useContext(AuthContext)
    return authState.isAuth ? (
        <Route {...props} path={path} />
      ) : (
        <Navigate to="/login" replace state={{ from: path }} />
      );
};

export default PrivateRoute;
