import React from 'react'
import logo from '../assets/logo.jpg'
import { Search,Menu } from 'lucide-react'

function Header({showSearchbar,showhamburger}) {
  return (
    <div className='  flex items-center justify-around h-20 w-screen sticky z-50 top-0 left-0  bg-[rgba(13,13,13,1)]'> 
           {showhamburger && <Menu size={40} /> }
           <img className="rounded-full h-20 mt-10 ml-35" src={logo} alt="" />
           {showSearchbar && <Search size={30} color="white" /> }

     </div>
  )
}

export default Header