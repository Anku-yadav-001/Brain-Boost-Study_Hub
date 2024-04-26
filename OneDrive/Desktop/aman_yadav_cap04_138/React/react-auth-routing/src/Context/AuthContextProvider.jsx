import { createContext, useState } from "react"

export let AuthContest=createContext()

export function AuthContextProvider({children}){
    let [isAuth,setIsAuth]=useState(false)
    return (
        <AuthContest.Provider value={{isAuth,setIsAuth}}>
            {children}
        </AuthContest.Provider>
    )
   
}