import React from 'react'
import logo from '../assets/logo.jpg'

function Header() {
  return (
    <div className='  flex items-center justify-center h-20 w-screen fixed z-50 top-0 left-0 border-4 border-white'> 
           <img className="rounded-full h-20 mt-10" src={logo} alt="" />
     </div>
  )
}

export default Header