import React, { createContext, useContext, useState } from 'react'
import App from '../App'
let ThemeContext=createContext()
export default function ThemeContextProvider({children}) {
  let [darkTheme,setDarkTheme]=useState(false)
  let toggleTheme=()=>{
    setDarkTheme(!darkTheme)
  }
  return (
    <ThemeContext.Provider value={{darkTheme,toggleTheme}}>

     {children}
    </ThemeContext.Provider>
  )
}
export const useTheme=()=>useContext(ThemeContext)