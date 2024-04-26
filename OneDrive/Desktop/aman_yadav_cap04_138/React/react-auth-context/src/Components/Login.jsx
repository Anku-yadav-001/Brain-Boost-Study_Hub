import React, { useContext, useState } from 'react'
import {AuthContext} from "../Context/AuthContextProvider"
export default function Login() {
    let {loginUser,loading,error}=useContext(AuthContext)
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')

    let handleSubmit=(event)=>{
        event.preventDefault();
        loginUser(email,password)
    }
    
    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleSubmit} >
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                />
                <br />
                <input type = "submit" disabled={loading}/>

            </form>     
            {error&&<p>{error}</p>}           
        </div>
    )
}
