import { createContext, useState } from "react";

export let valContectProvide=createContext()

function AuthContextProvider({children}) {
    let [isAuth,setIsAuth]=useState(false)
    let [token,setToken]=useState(null)
            return <>
             <valContectProvide.Provider value={{isAuth,token}}>
                {children}
             </valContectProvide.Provider>
            </>
}

export default AuthContextProvider;
