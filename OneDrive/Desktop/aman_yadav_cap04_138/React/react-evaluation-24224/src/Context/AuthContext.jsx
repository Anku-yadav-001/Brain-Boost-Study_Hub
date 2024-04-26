import { createContext, useState } from "react";

export let AuthContext=createContext()

function AuthContextProvider({children}) {
    let [isAuth,setIsAuth]=useState(false)
    let [token,setToken]=useState(null)

    return (
        <AuthContext.Provider value={{isAuth,setIsAuth,token,setToken}}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContextProvider;
