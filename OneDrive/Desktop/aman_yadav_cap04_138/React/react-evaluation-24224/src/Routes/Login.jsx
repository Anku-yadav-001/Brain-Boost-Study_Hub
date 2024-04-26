import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let navigate=useNavigate()
  let {setIsAuth,setToken}=useContext(AuthContext)

  async function loginStatus(e){
    e.preventDefault()
    try {
      let response=await fetch('https://reqres.in/api/login',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
      })
      let data=await response.json()
      setIsAuth(true)
      setToken(data.token)
      navigate("/dashboard")
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <div>
      <form data-testid="login-form" onSubmit={loginStatus}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
