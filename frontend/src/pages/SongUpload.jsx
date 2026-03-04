import React, { useState } from 'react'
import Header from '../component/Header.jsx'
import Footer from '../component/Footer.jsx'
import axios from 'axios';
import toast from 'react-hot-toast';


function SongUpload() {

  const [title, setTitle]=useState('');
  const [artist, setAtrits]=useState('');
  const [coverImage, setCoverImage]=useState('');
  const [songUrl, setSongUrl]=useState('');
  const [isLoading, setIsLoading] = useState(false);




  return (

            


    <div className='w-full h-screen'>


   {isLoading && (
  <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
    {/* Spinner */}
    <div className="w-16 h-16 border-4 border-t-blue-500 border-white/30 rounded-full animate-spin"></div>
    
    {/* Message */}
    <h2 className="text-white mt-4 text-xl font-semibold">Uploading Your Song...</h2>
    <p className="text-gray-300 text-sm">Please don't refresh the page</p>
  </div>
)}
    





    <Header />
   <div className='bg-black h-screen flex items-center justify-center'>
   <form action="" className='space-y-5 mt-10'
   onSubmit={async (e)=>{
    e.preventDefault();
    const formData = new FormData();

    formData.append('title',title);
    formData.append('artist',artist);
    formData.append('songUrl',songUrl);
    formData.append('coverImage',coverImage);

      

    try {
      setIsLoading(true)
      const data = await axios.post('http://localhost:3000/api/v1/song/songUpload',formData )
      toast.success("song uploaded✔")
      console.log("song uploaded");
    } catch (error) {
      const message = error.response?.data?.message || "somthing went wrong!";
      toast.error(message);
       console.error(error.response?.data || error.message);
    }finally{
        setIsLoading(false)
    }
        

   }}
   >

                     
     <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1">Title</label>
                <input type="text" placeholder="Enter Song Title" name="title"
                    className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                    onChange={function(elem){
                         const tempT = elem.target.value;
                          setTitle(tempT);
                     }}
                    />
           
       </div>

     <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1">Artist</label>
                <input type="text" placeholder="Enter Artist Name" name="artist"
                    className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                    onChange={function(elem){
                      const tempA = elem.target.value;
                      setAtrits(tempA);
                    }}
                    />
           
       </div>

     <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1">songUrl</label>
                <input type="file" placeholder="" name="songUrl"
                    className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                    onChange={function(elem){
                      console.log(elem)
                     const tempS = elem.target.files[0];
                     setSongUrl(tempS)
                    }}
                    />
           
       </div>

     <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1">coverImage</label>
                <input type="file" placeholder="" name="coverImage"
                    className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"  
                    onChange={function(elem){
                      const tempC = elem.target.files[0];
                      setCoverImage(tempC)
                    }}
                    />
           
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