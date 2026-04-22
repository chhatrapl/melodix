import React, { useContext } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { MusicContext } from '../Context/MusicProvider'
import Liked_Card from '../component/Liked_Card';
import { useLikedSongs } from '../hooks/useLikedSongs';

function LikedSongs() {
  const {data,isLoading,isError} = useLikedSongs();

  //const {likedSongs}=useContext(MusicContext)

  if(isLoading) return <p>Loading...</p>

  if(isError) return <p>Errore!</p>
  return (
    <div className=' likedsong pt-20 pb-16 bg-[rgba(26,26,26,1)] min-h-screen'>
       
       <div className='px-4 flex flex-col gap-4'>
       {data.map((Song, index)=>(
        <Liked_Card 
         key={Song._id}
         index={index}
         title={Song.title}
         coverImage={Song.coverImage}
         songs={data}

        />
       )
      )}
       </div>
       
    </div>
  )
}

export default LikedSongs