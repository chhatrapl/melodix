import React from 'react'
import {House, Heart, CircleUserRound} from 'lucide-react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-[rgba(13,13,13,1)] fixed flex items-center justify-around bottom-0 left-0 w-screen h-12 '>
        <Link to="/"> <House size={30} color='white' className=''/></Link>

       <Link to="/my-like"><Heart size={30} color='white'/></Link>
        
        <Link><CircleUserRound size={30} color='white' /></Link>
    
    </div>
  )
}

export default Footer