import React, { createContext, useEffect, useRef, useState } from 'react'
import SongPlay from '../pages/SongPlay';


export const MusicContext = createContext();

function MusicProvider({children}) {

const [currentSongIndex, setCurrentSongIndex] = useState(null);
const [songList, setSongList] = useState([]) 
const audioRef = useRef( new Audio())
const [isPlaying, setIsPlaying] = useState(false);
const [currentTime, setCurrentTime]=useState();
const [duration, setDuration] = useState();


const songPlay = (index, list) =>{
     setSongList(list);
     setCurrentSongIndex(index)

     audioRef.current.src = list[index].songUrl;
     audioRef.current.play();
     setIsPlaying(true);
};

const nextSong = ()=>{
  if(currentSongIndex < songList.length -1){
    songPlay(currentSongIndex+1, songList)
  }
};


const prevSong = ()=>{
  if(currentSongIndex>0){
    songPlay(currentSongIndex-1,songList)
  }
};
  
const togglePlay = ()=>{
  if(audioRef.current.paused){
    audioRef.current.play();
    setIsPlaying(true);
  }else{
    audioRef.current.pause();
    setIsPlaying(false)
  }
}


const handleLoadedMetaData = ()=>{
  setDuration(audioRef.current.duration);
};

const handleTimeUpdate=()=>{
  setCurrentTime(audioRef.current.currentTime);
};

const handleProgressChange = (e)=>{
  const newTime = e.target.value;
  audioRef.current.currentTime;
  setCurrentTime(newTime);
}

useEffect(()=>{
  const audio = audioRef.current;
  audio.addEventListener('timeupdate', handleTimeUpdate);
  audio.addEventListener('loadedmetadata',handleLoadedMetaData);
 
  return ()=>{
    audio.removeEventLister('timeupdate', handleTimeUpdate);
    audio.removeEventListener('loadedmetadata',handleLoadedMetaData);
  }

},[]);



  return (
    <MusicContext.Provider value={{currentSongIndex,songList,songPlay,nextSong,prevSong,audioRef,togglePlay,isPlaying,currentTime,duration,handleProgressChange}}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicProvider