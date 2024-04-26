import React from 'react'
import {useTheme} from "../Context/ThemeContextProvider"
import User from './User'
import userData from "../db.json"
export const Dashboard = () => {
    let {darkTheme,toggleTheme}=useTheme()

    let handleTheme=()=>{
        toggleTheme()
    }
    return (
        <div data-testid = "dashboard-cont" style={{backgroundColor:darkTheme?'black':'white'}}>
            <select data-testid = "select-theme" onChange={handleTheme}>
            <option value="light">Light Theme</option>
                <option value="dark">Dark Theme</option>
            </select>
            {/* map through the users and render User component */}
            <div>
                {userData.map(user=>(
                    <User key={user.id} user={user} darkTheme={darkTheme}/>
                ))}
            </div>
        </div>
)
}
