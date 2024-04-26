import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";
function Navbar() {
    let { isAuth } = useContext(AuthContext);
    return(
        <div className = "navbar" >
                 <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
               <Link {isAuth?("/products")}>Products</Link>
        </div>
    )
}

export { Navbar }