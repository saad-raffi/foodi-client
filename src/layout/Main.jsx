import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../../src/App.css"
import Footer from '../components/Footer'
import { AuthProvider } from "../context/AuthContext";

const Main = () => {
  return (
    
       <AuthProvider>
        <div className='bg-prigmayBG'>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
        </AuthProvider>
  )
}

export default Main