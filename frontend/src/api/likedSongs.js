import API_URL from "../Config/Api";
import axios from "axios";

export const fetchLikedSongs = async ()=>{

    const res = await fetch(`${API_URL}/api/v1/likes/likedsongs`);
     const data = await res.json()
    return data.likedSongs
};


export const toggleLikedSongApi = async (songId)=>{
  const res =  await axios.post(`${API_URL}/api/v1/likes/likesong/${songId}`)
   return res.data;
};