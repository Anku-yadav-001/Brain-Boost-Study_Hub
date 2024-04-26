import React, {createContext,useState} from "react";
export const AuthContext=createContext()
export const AuthContextProvider = ({children}) => {
   let [authState,setAuthState]=useState({
    isAuth:false,
    userDetails:null
   })

   const loginUser=(userDetails)=>{
    setAuthState({isAuth:true,userDetails})
   }
   const logoutUser=()=>{
    setAuthState({isAuth:false,userDetails:null})
   }
  let providerState = {
    authState,
    loginUser,
    logoutUser
  };

  //** dont change the below code **
  if (window.Cypress) {
    window.store = providerState;
  }
  //** dont change the above code **
  return (
    <AuthContext.Provider value={providerState}>
      {children}
    </AuthContext.Provider>
  )
};
