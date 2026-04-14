import React, { useContext } from 'react'
import jeena from '../assets/jeena.png'
import { MusicContext } from '../Context/MusicProvider'
 
function MusicPoster() {

 const {currentSongIndex, songList} = useContext(MusicContext)

    const currenSong = songList[currentSongIndex];
    console.log("poster currentSong:-", currenSong);

  return (
    <div className=' flex items-center justify-center'>
        <img src={currenSong.coverImage} alt="" className='rounded-full h-80 w-80 ' />
    </div>
  )
}

export default MusicPoster