import React from 'react'
import {House, Heart, CircleUserRound} from 'lucide-react'

function Footer() {
  return (
    <div className='bg-[rgba(13,13,13,1)] fixed flex items-center justify-around bottom-0 left-0 w-full h-20 '>
        
        <House size={40} color='white' className=''/>
        <Heart size={40} color='white'/>
        <CircleUserRound size={40} color='white' />
    
    </div>
  )
}

export default Footer