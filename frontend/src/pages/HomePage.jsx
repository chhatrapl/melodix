import React, { useEffect, useState } from 'react';
import Header from '../component/Header.jsx'
import Footer from '../component/Footer.jsx';
import Card from '../component/Card.jsx';
import axios from 'axios';
import API_URL from '../Config/Api.js';
import { useAllSongs } from '../hooks/useAllSongs.js';


function HomePage() {

  const [page, setPage]=useState(1)
  const [hasMore, setMore]=useState(true)



   const {data: songs = [],isLoading,isError}=useAllSongs();
   console.log("data= ",songs)

   console.log("isLoading= ",isLoading);
   console.log("isError= ",isError);




    // const fetchSong = async ()=>{
    //    try {
    //     const res = await axios.get(`${API_URL}/api/v1/song/allSongs?page=${page}&limit=10`);
    //     const songData = res.data.data.docs;
    //     console.log(res.data);
    //     setSongs((Prev => [...Prev, ...songData]));
    //     if(!res.data.data.hasNextPage){
    //       setMore(false);
    //     }
    //    } catch (error) {
    //     console.error("Error fetching songs", error);
    //    }
    // };

    // useEffect(()=>{
    //   fetchSong();
    // },[page]);
  
    // const handleScroll = ()=>{
    //   if( window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight ){
    //     if(hasMore){
    //       setPage((prevPage)=> prevPage +1);
    //     }else{
    //       console.log("no more")
    //     }
    //   }
    // };

  //   useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [hasMore]);



  return (
   
    <div className='flex items-center flex-col  min-h-screen  bg-[rgba(26,26,26,1)]'>
      
      <div className=' hero-section mt-10 flex items-center flex-col' >
   
       <div className=' items-center grid grid-cols-2 gap-5 pt-10 pl-7'>

      {songs.map((song,index)=>(
       <Card songData={song} key={song._id} index={index} songs={songs} />
      ))};

    </div>

          

      </div>
     
    </div>
  )
}

export default HomePage