import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


// Layout.jsx
function Layout({ children }) {
  return (
    <div className=" layout pt-10 pb-7">
      <Header />      
      <Outlet />
      <Footer />      
    </div>
  )
}

export default Layout