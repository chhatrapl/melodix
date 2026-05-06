import React, { createContext, useEffect, useRef, useState } from 'react'
import SongPlay from '../pages/SongPlay';
import axios from 'axios';
import API_URL from '../Config/Api';
import { usePlayerStore } from '../store/playerStore';
export const MusicContext = createContext();



function MusicProvider({children}) {

 const {setCurrentSong, setIsPlaying, currentSong,currentSongIndex,songList}=usePlayerStore();


const audioRef = useRef( new Audio())
const [currentTime, setCurrentTime]=useState();
const [duration, setDuration] = useState();
const[likedSongs, setLikedSongs] = useState([]);



const songPlay = async (index, list) =>{
   
     setCurrentSong(list[index], index, list)
     setIsPlaying(true);
     audioRef.current.src = list[index].songUrl;
   try {
      await audioRef.current.play();
   } catch (error) {
    
   }
    
};


const songClose= () => {
  if (audioRef.current) {
    audioRef.current.pause(); 
    setIsPlaying(false);
   localStorage.removeItem("player-storage")     
  }
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


// const handleLoadedMetaData = ()=>{
//   setDuration(audioRef.current.duration);
// };

// const handleTimeUpdate=()=>{
//   setCurrentTime(audioRef.current.currentTime);
// };

// const handleProgressChange = (e)=>{
//   const newTime = e.target.value;
//   audioRef.current.currentTime = newTime;
//   setCurrentTime(newTime);
// }


const toggleLike = async (song)=>{

  const songId = song._id || song;

  const isSongLiked = likedSongs.some(s => {
    const sId = s._id ? String(s._id) : String(s);
    return sId === String(songId);
  });

  if(isSongLiked){
    setLikedSongs(prev => prev.filter(s => {
      const sId = s._id ? String(s._id) : String(s);
      return sId !== String(songId);
    }));
    
  }else{
    setLikedSongs(prev=> [...prev, song]);
  }

    try {
       await axios.post(`${API_URL}/api/v1/likes/likesong/${songId}`)
    } catch (error) {
        console.log("like toggle fetch err :-",error);
    }
}


// useEffect(()=>{
//   const audio = audioRef.current;
//   audio.addEventListener('timeupdate', handleTimeUpdate);
//   audio.addEventListener('loadedmetadata',handleLoadedMetaData);
 
//   return ()=>{
//     audio.removeEventLister('timeupdate', handleTimeUpdate);
//     audio.removeEventListener('loadedmetadata',handleLoadedMetaData);
//   }

// },[]);

//  useEffect(()=>{
//   const fetchedLikedSongs =  async ()=>{
//    try {
//      const res = await axios.get(`${API_URL}/api/v1/likes/likedsongs`);
     
//      console.log("liked Songs :- ", res.data.likedSongs);
 
//      setLikedSongs(res.data.likedSongs)
//    } catch (error) {
//     console.log('fetch err', error)
//    }          
//   }
//   fetchedLikedSongs();
//  },[])




useEffect(()=>{
  if(currentSong){
     audioRef.current.src = currentSong.songUrl;
   //  audioRef.current.play();
       setIsPlaying(true);
  }
},[currentSong])


  return (
    <MusicContext.Provider value={{currentSongIndex,songClose,songPlay,nextSong,prevSong,audioRef,togglePlay,currentTime,duration,
                                   toggleLike, likedSongs
    }}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicProvider