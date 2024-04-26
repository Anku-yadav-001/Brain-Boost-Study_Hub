import React, { useContext, useEffect, useState } from 'react'
import { AuthContest } from '../Context/AuthContextProvider'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Login() {
    let {setIsAuth} =useContext(AuthContest)
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()
    async function loginStatus(e){
           e.preventDefault()
            try {
                let response=await fetch("https://reqres.in/api/login",{
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({email,password})
                })
                let answer=await response.json()
                setIsAuth(true)
                navigate("/")
            } catch (error) {
                console.log(error);
            }
    }
  
    return (
        <div>
            <form className = "auth_form"  onSubmit={loginStatus}>
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}