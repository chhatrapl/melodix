import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { MusicContext } from "../Context/MusicProvider";

function Card({song,index,songs}) {

  const navigate = useNavigate();
  const {songPlay} = useContext(MusicContext);

    const handleClick = (song)=>{
       navigate(`/musicplay/${song.title}`)
       songPlay(index, songs)
    }

  return (
    <div   onClick={()=>handleClick(song)} className=' h-40 w-40 flex flex-col items-center justify-center rounded-2xl text-white cursor-pointer'>
      <div>
       <img  className='h-30 w-30 rounded-2xl' src={song.coverImage} alt="" />
      </div>
     <h1 className='truncate w-full px-2'>{song.title} </h1>
     </div>
  )
}

export default Card 