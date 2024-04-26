import React from 'react'
import { Navbar } from './Navbar'
import { Route ,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Products from "../Pages/Products"
import Login from '../Pages/Login'
const AllRoutes = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>
        </div>
    )
}

export {AllRoutes}