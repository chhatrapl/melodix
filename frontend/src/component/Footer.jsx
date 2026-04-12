import React from 'react'
import {House, Heart, CircleUserRound} from 'lucide-react'

function Footer() {
  return (
    <div className='bg-[rgba(13,13,13,1)] fixed flex items-center justify-around bottom-0 left-0 w-full h-12 '>
        
        <House size={30} color='white' className=''/>
        <Heart size={30} color='white'/>
        <CircleUserRound size={30} color='white' />
    
    </div>
  )
}

export default Footer