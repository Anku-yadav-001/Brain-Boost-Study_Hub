import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div data-testid="navbar" style={{display:"flex",justifyContent:"space-between"}}>
      <div className="name">React-OLX</div>
      <div data-testid="login-logout">       
        {/* Either Link to login or span(welcome message)+Logout button with className="logout" should be there */}
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
