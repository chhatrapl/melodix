import React from 'react'
import logo from '../assets/logo.jpg'

function Card() {
  return (
    <div className=' h-40 w-40 flex flex-col items-center justify-center rounded-2xl text-white'>
      <div>
       <img  className='h-30 w-30 rounded-2xl' src={logo} alt="" />
      </div>
     <h1 className='truncate w-full px-2'>song title yaha pr ayega jitna lamba bhi tile rhe </h1>
     </div>
  )
}

export default Card 