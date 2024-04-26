import React, {createContext, useState} from 'react'
export let AuthContext=createContext()
export default function AuthContextProvider({children}) {
     let [isAuth,setIsAuth]=useState(false);
     let [error,setError]=useState(null)
     let [loading,setLoading]=useState(false)
     let [token,setToken]=useState("")

     let loginUser=async (email,password)=>{
      setLoading(true)
      setError(null)
      try {
        let response=await fetch('https://reqres.in/api/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({email,password})
        })
        let data=await response.json()
        if(response.ok){
          setIsAuth(true)
          setToken(data.token)
        }
      } catch (error) {
        setError('Error occurred')
      }
      setLoading(false)
     }
     let userLogout=()=>{
        setIsAuth(false)
        setToken("");
     }
  return (
    <div>
      <AuthContext.Provider value={{isAuth,loading,error,loginUser,userLogout,token}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
