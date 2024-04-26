import React from 'react'

export default function User({user,darkTheme}) {
    
    return (
        <div data-testid = "user" style={{color:darkTheme?'white':'black',border:"2px solid red",margin:"10px",paddingLeft:"20px"}}>
            <img src={user.img} alt="" width="70px"/>
            <p>{user.name}</p>
            <p>{user.position}</p>
            <p>Professional Level {user.level}</p>
            <p>{user.points} Points</p>
            <input data-testid = "level" type = "range"  style={{accentColor:darkTheme?'yellow':'blue'}}/>
        </div>
    )
}
