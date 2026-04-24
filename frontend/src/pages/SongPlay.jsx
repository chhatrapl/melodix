import Footer from '../component/Footer.jsx'
import Header from '../component/Header.jsx'
import MusicPoster from '../component/MusicPoster.jsx'
import SongDetails from '../component/SongDetails.jsx'
import { useContext } from 'react'
import { MusicContext } from '../Context/MusicProvider.jsx'
import { SkipBack, SkipForward,Pause, Play, Heart} from 'lucide-react'
import { useLikedSongs,useToggleLike } from '../hooks/useLikedSongs.js'
import { usePlayerStore } from '../store/playerStore.js'

function SongPlay() {

   const { songPlay, prevSong, nextSong,togglePlay, currentTime, duration, handleProgressChange,} = useContext(MusicContext)

     const {isPlaying,setCurrentSong,songList,currentSong,currentSongIndex}=usePlayerStore();

  
      const { data: likedSongs = [] } = useLikedSongs();
       const { mutate: toggleLike } = useToggleLike();


  


   if (currentSongIndex === null) return <h1>No Song Playing</h1>;

   const isSongLiked = likedSongs.some(song => 
    String(song._id) === String(currentSong?._id)
  )


  
     const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};


  return (
    <div className='flex flex-col  items-center justify-center min-h-screen '>
  

   <div className="hero relative flex flex-col items-center justify-center grow w-full">
    <img src={currentSong.coverImage} alt="" className='absolute w-full h-full object-cover -z-10 blur-[3px] '/>
    <div className="absolute inset-0 bg-black/30 -z-10"></div>

   
    <SongDetails />
   


  <div className="w-full max-w-md mx-auto px-4 mt-6">
  <div className="flex justify-between text-xs text-gray-400 mb-1">
    {/* Time formatting function niche hai */}
    <span>{formatTime(currentTime)}</span>

     <button onClick={()=> toggleLike(currentSong._id)}>
      

      {isSongLiked ? (
    <span className="text-2xl"><Heart size={20} color="white" fill='white' /></span> 
  ) : (
    <span className="text-2xl ml-1"><Heart size={20} color="white" /></span>
  )}

     </button>

    <span>{formatTime(duration)}</span>
  </div>
  
  <input
    type="range"
    min="0"
    max={duration || 0}
    value={currentTime}
    onChange={handleProgressChange}
    className="w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-amber-50"
  />
</div>

      

     <div className="flex gap-6 items-center">
  <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1a1a1a] shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_10px_rgba(0,0,0,0.5)] active:shadow-inner text-amber-50"
  onClick={prevSong}
  >
    <span className="material-icons"><SkipBack /></span>
  </button>

  <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1a1a1a] shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_10px_rgba(0,0,0,0.5)] active:shadow-inner text-amber-50 font-bold"
  onClick={togglePlay}
  >
    {isPlaying? (
    <span className="text-2xl"><Pause /></span> 
  ) : (
    <span className="text-2xl ml-1"><Play /></span>
  )}
  </button>


  
  <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1a1a1a] shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_10px_rgba(0,0,0,0.5)] active:shadow-inner text-amber-50 font-bold"
  onClick={nextSong}
  >
    <span className="material-icons"><SkipForward /></span>
  </button>

    
        
</div>

    
   </div>

   
    </div>
  )
}

export default SongPlay