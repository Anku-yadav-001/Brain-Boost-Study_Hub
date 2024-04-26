import React, { useContext } from 'react'
import {AuthContext} from "../Context/AuthContextProvider"
export const Dashboard = () => {
    let {token,userLogout}=useContext(AuthContext)
    
    return (
        <div >
            <h3 data-testid = "token" >Token:{token} </h3>
            <button data-testid = "logout" onClick={userLogout} >LOGOUT</button>
        </div>
    )
}
