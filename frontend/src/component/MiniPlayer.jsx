import { useContext } from "react";
import {usePlayerStore} from "../store/playerStore.js";
import { MusicContext } from "../Context/MusicProvider.jsx";


export const  MiniPlayer = ({ audioRef }) => {
  const { currentSong, isPlaying, setIsPlaying, stopPlayer } = usePlayerStore();
  const {togglePlay,songClose}= useContext(MusicContext);

  if (!currentSong) return null

 

  return (
    <div className="fixed bottom-12 left-0 right-0 bg-neutral-900 border-t border-neutral-700 px-4 py-3 flex items-center gap-3">
      
      {/* Cover Image */}
      <img
        src={currentSong.coverImage}
        alt={currentSong.title}
        className="w-12 h-12 rounded-lg object-cover shrink-0"
      />

      {/* Title */}
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">
          {currentSong.title}
        </p>
      </div>

      {/* Play Pause Button */}
      <button
        onClick={togglePlay}
        className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
      
      <button 
     
      >❌</button>

    </div>
  )
}
