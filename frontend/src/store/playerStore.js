import {create} from "zustand";
import {persist} from "zustand/middleware"

export const usePlayerStore = create(
    persist((set)=>({
    currentSong:null,
    isPlaying:false,
    songList:[],
    currentSongIndex:null,


    setCurrentSong : (song, index, list)=> set({
        currentSong:song,
        currentSongIndex:index,
        songList:list,
        isPlaying:true
    }),
    
    setIsPlaying : (val)=>set({isPlaying:val}),
    stopPlayer: () => set({ currentSong: null, isPlaying: false }),
    }),
       { name: "player-storage" }
)
);