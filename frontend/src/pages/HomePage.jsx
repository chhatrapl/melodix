import React, { useEffect, useState } from 'react';
import Header from '../component/Header.jsx'
import Footer from '../component/Footer.jsx';
import Card from '../component/Card.jsx';
import axios from 'axios';


function HomePage() {

  const [songs, setSongs]=useState([])
  const [page, setPage]=useState(1)
  const [hasMore, setMore]=useState(true)

    const fetchSong = async ()=>{
       try {
        const res = await axios.get(`http://localhost:3000/api/v1/song/allSongs?page=${page}&limit=10`);
        const songData = res.data.data.docs;
        console.log(res.data);
        setSongs((Prev => [...Prev, ...songData]));
        if(!res.data.data.hashNextPage){
          setMore(false);
        }
       } catch (error) {
        console.error("Error fetching songs", error);
       }
    };

    useEffect(()=>{
      fetchSong();
    },[page]);
  
    const handleScroll = ()=>{
      if( window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight ){
        if(hashMore){
          setPage((prevPage)=> prevPage +1);
        }
      }
    };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);



  return (
   
    <div className='flex items-center flex-col  min-h-screen  bg-[rgba(26,26,26,1)]'>
      <Header showSearchbar={true} />
       
      <div className=' hero-section mt-10 flex items-center flex-col' >
   
       <div className=' items-center grid grid-cols-2 gap-5 pt-10 pl-7'>

      {songs.map((song,index)=>(
       <Card songData={song} key={song._id} index={index} songs={songs} />
      ))};

    </div>

          

      </div>
      <Footer />
    </div>
  )
}

export default HomePage