import { Link } from "react-router-dom";
import {useEffect,useContext} from "react"
import { AuthContext } from "../Context/AuthContext";
const Login = () => {
   let {loginUser,logoutUser,isAuth}=useContext(AuthContext)
  return (
    <div data-testid="login">
      <h2>Login Page</h2>
      <form data-cy="login-form">
        <div>
          <label>
            {" "}
            Email
            <input
              data-cy="login-email"
              type="email"
              placeholder="Enter Email"
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Password
            <input
              data-cy="login-password"
              type="password"
              placeholder="Enter Password"
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div data-cy="go-to-home-page">
        {/* Add a Link tag here with textContent `Home Page` after `Go to` and on clicking it we will be redirected to Home page*/}
       <Link to="/">Go to</Link>
      </div>
    </div>
  );
};

export default Login;
