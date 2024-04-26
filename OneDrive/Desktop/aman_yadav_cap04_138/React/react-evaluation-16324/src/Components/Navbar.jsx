import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const {authState,logoutUser}=useContext(AuthContext)
  let navigate=useNavigate()

  function handleLogout(){
    logoutUser()
    navigate('/login')
  }
  return (
    <div data-testid="navbar" style={{display:"flex",justifyContent:"space-between"}}>
      <div className="name" onClick={()=>navigate('/')}>React-OLX</div>
      <div data-testid="login-logout">       
        {/* Either Link to login or span(welcome message)+Logout button with className="logout" should be there */}
        {authState.isAuth ?(
          <>
          <span>Welcome, {authState.userDetails.email}</span>
        <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ):(

        <Link to='/login'>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
