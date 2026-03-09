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
    <div className='flex flex-col bg-black '>
      <Header />

     <div className=' items-center grid grid-cols-2 gap-5 pt-10 pl-7'>

       {songs.map((song)=>(
        <Card songData={song} key={song._id}  />
       ))};

     </div>

      <Footer />
    </div>
  )
}

export default HomePage