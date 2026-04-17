import React from 'react'
import logo from '../assets/logo.jpg'
import { Search,Menu } from 'lucide-react'

function Header() {
  return (
    <div className='  flex items-center justify-around h-20 w-screen fixed z-50 top-0 left-0  bg-[rgba(13,13,13,1)]'> 
          
           <img className="rounded-full h-10  ml-35" src={logo} alt="" />
           <Search size={30} color="white" /> 

     </div>
  )
}

export default Header