import React from 'react'
import jeena from '../assets/jeena.png'

function Poster() {
  return (
       <div className=' flex items-center justify-center h-50 w-100 bg-black rounded-2xl relative'>
         <img src={jeena} alt="" className='h-full w-full rounded-2xl object-cover'  />
         <button className='text-white absolute bg-[rgba(13,13,13,1)] py-2 px-4 rounded-2xl mt-35 ml-65 font-inter font-bold text-{14]'> Play now</button>
       </div>
 )
}

export default Poster