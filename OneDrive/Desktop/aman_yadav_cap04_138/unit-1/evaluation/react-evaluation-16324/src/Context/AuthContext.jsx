import {createContext,useState} from "react"
import axios from "axios"
export const AuthContext=createContext()
export const AuthContextProvider = ({childern}) => {
     let initialState={
      isAuth:false,
      userDetails:null
     }
     let [authState,setAuthState]=useState(initialState)
     async function loginUser(){
       try {
        let response =await axios.post("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",userDetails)
        let {token}=response.data;
        if(token){
          setAuthState({
            isAuth:true,
            userDetails: {email:userDetails.email,token:token}
          })
        }
       } catch (error) {
        console.log(error);
       }
     }
     function logoutUser(){
      setAuthState(initialState)
     }
  let providerState = {
    authState,
    loginUser,
    logoutUser
  };
  return (
    <AuthContext.Provider value={{isAuth,loginUser,logoutUser}}>
      {childern}
    </AuthContext.Provider>
  )
  
  //** dont change the below code **
  if (window.Cypress) {
    window.store = providerState;
  }
  //** dont change the above code **
};
