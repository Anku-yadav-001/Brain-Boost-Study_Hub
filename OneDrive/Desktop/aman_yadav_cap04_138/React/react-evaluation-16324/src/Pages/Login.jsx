import { Link, useNavigate } from "react-router-dom";
import {useEffect,useContext,useState} from "react"
import { AuthContext } from "../Context/AuthContext";
const Login = () => {
   let {loginUser}=useContext(AuthContext)
   let naviage=useNavigate()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = await loginUser({ email, password });
    setLoading(false);
    if (success) {
      naviage('/');
    } else {
      setError('Invalid email or password');
    }
  };
  return (
    <div data-testid="login">
      <h2>Login Page</h2>
      <form data-cy="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            {" "}
            Email
            <input
              data-cy="login-email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" disabled={loading} >
            {loading ?'Logging in....':'Login'}
          </input>
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
