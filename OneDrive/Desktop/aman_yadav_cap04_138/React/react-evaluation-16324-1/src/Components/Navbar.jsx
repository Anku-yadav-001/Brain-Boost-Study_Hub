import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  let {authState,logoutUser}=useContext(AuthContext)
  function handleLogout(){
    logoutUser()
  }
  return (
    <div data-testid="navbar">
      <div className="name">React-OLX</div>
      <div data-testid="login-logout">       
        {/* Either Link to login or span(welcome message)+Logout button with className="logout" should be there */}
        {
          authState.isAuth?(
            <>
            <span>Welcome, {authState.userDetails.email}</span>
            <button  onClick={handleLogout}>Logout</button>
            </>
          ):(
            <Link to='/login'>Login</Link>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
