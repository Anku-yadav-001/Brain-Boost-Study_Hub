import { Link } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Login from "./Login";
import  Dashboard from "./Dashboard"
import AllRoutes from "./AllRoutes";
function Home() {
  return (
    <div>
      <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}
export default Home;
