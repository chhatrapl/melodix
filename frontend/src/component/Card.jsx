import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { MusicContext } from "../Context/MusicProvider";

function Card({songData,index,songs}) {

  const navigate = useNavigate();
  const {songPlay} = useContext(MusicContext);

    const handleClick = ()=>{
       navigate("/musicplay")
       songPlay(index, songs)
    }

  return (
    <div   onClick={handleClick} className=' h-40 w-40 flex flex-col items-center justify-center rounded-2xl text-white cursor-pointer'>
      <div>
       <img  className='h-30 w-30 rounded-2xl' src={songData.coverImage} alt="" />
      </div>
     <h1 className='truncate w-full px-2'>{songData.title} </h1>
     </div>
  )
}

export default Card 