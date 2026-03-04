import React from 'react'
import {House, FolderUp} from 'lucide-react'

function Footer() {
  return (
    <div className='bg-black sticky flex items-center justify-center bottom-0 left-0 w-full h-10 '>
        
        <House size={40} color='white' className=''/>
        <FolderUp size={40} color='white' className=' ml-10'/>
    
    </div>
  )
}

export default Footer