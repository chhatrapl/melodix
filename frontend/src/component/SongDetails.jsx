import React, { useContext } from 'react'
import { usePlayerStore } from '../store/playerStore';

function SongDetails() {

  const {currentSong,}=usePlayerStore();
  
  return (
    <div  className=' h-100 w-100 flex flex-col items-center justify-center rounded-2xl text-white cursor-pointer'>
      <div>
       <img  className='h-80 w-80 rounded-full' src={currentSong.coverImage} alt="" />
      </div>
     <h1 className='truncate w-full px-2 text-center'>{currentSong.title} </h1>
     </div>
  )
}

export default SongDetails