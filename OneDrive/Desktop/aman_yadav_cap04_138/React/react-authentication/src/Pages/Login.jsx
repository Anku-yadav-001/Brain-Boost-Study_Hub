import React, { useContext, useState } from 'react'
import {AuthContext} from "../Context/AuthContextProvider"
export default function Login() {
    let {setIsAuth}=useContext(AuthContext);
    let [user,setUser]=useState('')
    let [password,setPassword]=useState('');

    let handleSubmit=async(event)=>{
        event.preventDefault()
        let response=await fetch('https://reqres.in/api/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({email:user,password})
        })
        let data=await response.json()
        if(response.ok){
            setIsAuth(true)
        }
        
    }
    return (
        <div>
            <form className = "auth_form" onSubmit={handleSubmit} >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}