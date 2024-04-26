import {createContext,useState} from "react"

export const AuthContext=createContext()
export const AuthContextProvider = ({childern}) => {
   
     let [authState,setAuthState]=useState({
      isAuth:false,
      userDetails:null
     })
     async function loginUser(userDetails){
      try {
        const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userDetails),
        });
        const data = await response.json();
        if (data.token) {
          setAuthState({ isAuth: true, userDetails: { email: userDetails.email, token: data.token } });
          return true;
        } else {
          return false;
        }
      } catch (error) {
       console.log(error);
        return false;
      }


     }
     function logoutUser(){
      setAuthState({
        isAuth:false,
        userDetails:null
      })
     }
  let providerState = {
    authState,
    loginUser,
    logoutUser
  };
  return (
    <AuthContext.Provider value={{authState,loginUser,logoutUser}}>
      {childern}
    </AuthContext.Provider>
  )
  
  //** dont change the below code **
  if (window.Cypress) {
    window.store = providerState;
  }
  //** dont change the above code **
};
