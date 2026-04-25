import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar/>
        {/* Main content will be rendered here */}
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
