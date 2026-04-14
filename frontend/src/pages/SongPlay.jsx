import Footer from '../component/Footer.jsx'
import Header from '../component/Header.jsx'
import MusicPoster from '../component/MusicPoster.jsx'
import SongDetails from '../component/SongDetails.jsx'
import { useContext } from 'react'
import { MusicContext } from '../Context/MusicProvider.jsx'
import { SkipBack, SkipForward,Pause, Play} from 'lucide-react'

function SongPlay() {

   const {currentSongIndex, songList, songPlay, prevSong, nextSong,togglePlay,isPlaying, currentTime, duration, handleProgressChange} = useContext(MusicContext)
   if (currentSongIndex === null) return <h1>No Song Playing</h1>;

   const currentSong = songList[currentSongIndex];
  // console.log(currentSong);


  const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};


  return (
    <div className='flex flex-col  items-center justify-center min-h-screen '>
   <Header />

   <div className="hero relative flex flex-col items-center justify-center grow w-full">
    <img src={currentSong.coverImage} alt="" className='absolute w-full h-full object-cover -z-10 blur-[3px] '/>
    <div className="absolute inset-0 bg-black/30 -z-10"></div>

   
    <SongDetails />
   


  <div className="w-full max-w-md mx-auto px-4 mt-6">
  <div className="flex justify-between text-xs text-gray-400 mb-1">
    {/* Time formatting function niche hai */}
    <span>{formatTime(currentTime)}</span>
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
    {isPlaying ? (
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

   <Footer />
    </div>
  )
}

export default SongPlay