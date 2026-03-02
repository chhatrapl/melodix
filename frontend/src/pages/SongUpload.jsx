import React, { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function SongUpload() {

  const [title, setTitle]=useState('');
  const [artist, setAtrits]=useState('');
  const [coverImage, setCoverImage]=useState('');
  const [songUrl, setSongUrl]=useState('');




  return (


    <div className='w-full h-screen'>
    <Header />
   <div className='bg-black h-screen flex items-center justify-center'>
   <form action="" className='space-y-5 mt-10'>

                     
     <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1">Title</label>
                <input type="text" placeholder="Enter Song Title" name="title"
                    className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"  />
           
       </div>

     <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1">Artist</label>
                <input type="text" placeholder="Enter Artist Name" name="artist"
                    className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"  />
           
       </div>

     <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1">songUrl</label>
                <input type="file" placeholder="" name="songUrl"
                    className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"  />
           
       </div>

     <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1">coverImage</label>
                <input type="file" placeholder="" name="coverImage"
                    className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"  />
           
       </div>

       <button type="submit" 
               className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl mt-4 shadow-lg shadow-indigo-600/30 active:scale-[0.98] transition-transform cursor-pointer">
                upload
            </button>
    
    </form>    
    
     </div>
   <Footer />

    </div>
  )
}

export default SongUpload