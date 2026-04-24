import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { MusicContext } from "../Context/MusicProvider";


function Liked_Card({index,title,coverImage,songs}) {

    const navigate = useNavigate();
      const {songPlay,} = useContext(MusicContext);
    
        const handleClick = (title)=>{
           navigate(`/my-likes/musicplay/${title}`)
           songPlay(index, songs)
        }

  return (
    <div className="flex items-center  h-20 bg-[rgba(13,13,13,1)] rounded-2xl py-3 px-3 gap-2 cursor-pointer"
          onClick={()=>handleClick(title)}>
        <div className="bg-amber-300 h-15 w-15 rounded shrink-0">
            <img src={coverImage} alt="" className="h-15 w-15" />
        </div>
        <h1 className="text-2xl text-white truncate min-w-0">{title}</h1>
    </div>
  )
}

export default Liked_Card