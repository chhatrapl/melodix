import Song from "../model/songModel.js";
import Artist from "../model/artistModel.js";
import { v2 as cloudinary } from 'cloudinary';
import fs, { createReadStream } from "fs";
import axios from "axios";




const cleanUpFiles = (files) => {
  if(files.songUrl) fs.unlinkSync(files.songUrl[0].path);
  if(files.coverImage) fs.unlinkSync(files.coverImage[0].path);
};


export const songUpload = async (req, res) => {
     try {

       const {title,artist} = req.body;
       const files = req.files;

       console.log('artist:',artist);
       console.log('title:',title);
      
 
       if(!title || !artist || !req.files || !req.files?.songUrl || !req.files?.coverImage){
        if(files) cleanUpFiles(files)
         return res.status(400).json({message:"all fields are required!"})
       };


     console.log("sare filds hai.")

       const ArtistDoc = await Artist.findOne({title:artist});
       

       if(!ArtistDoc){
        if(files) cleanUpFiles(files)
        return res.status(401).json({message:"artist not found!"})
       }
        
      const artistId = ArtistDoc._id;

      console.log("artist mil gaya:", artistId)
 
       const existingSong = await Song.findOne({title,artist:artistId});

       console.log('existingSong:-',existingSong)
 
       if(existingSong){
        if(files) cleanUpFiles(files)
         return res.status(400).json({message:"song alreday uploaded"});
       }
 
       const songLocalPath = req.files.songUrl[0].path;
       const imageLocalPath = req.files.coverImage[0].path;

       console.log("songLocalPath:", songLocalPath)
       console.log("ImageLocalPath:", imageLocalPath)

        const songRes = await cloudinary.uploader.upload(songLocalPath,{
          resource_type:"video",
          folder:"songs"
        });

        const imageRes = await cloudinary.uploader.upload(imageLocalPath,{
          resource_type:"auto",
          folder:"images"
        });
         
        console.log('songUrl:-',songRes.secure_url);
        console.log('imageUrl:-', imageRes.secure_url);

      const newSong = await Song.create({
      title:title,
      artist:artistId,
      songUrl:songRes.secure_url,
      songPublicId:songRes.public_id,
      coverImage:imageRes.secure_url,
      coverImagePublicId:imageRes.public_id
    });

    console.log('upload ho gya')

   if(files) cleanUpFiles(files)
    console.log('file delete ho gya')
   return res.status(200).json({success:true, message:"song uploaded successfull."})
 
     } catch (error) {
       console.log(error.message);
       if(files) cleanUpFiles(files);
    return res.status(500).json({success:false, message:"somthing went wrong!"})
     }     
};


export const deleteSong = async (req, res) =>{

  try {
    
   const {id} =req.params;



   const song =  await Song.findById(id);

   if(!song){
    return res.status(404)
              .json({message:"song not found!"})
   }

   console.log('song:', song)


   const songPublicId = song.songPublicId;
   const coverImagePublicId = song.coverImagePublicId;

  console.log(`songPublicId:${songPublicId}, coverimgPublicId:${coverImagePublicId}`);

  await cloudinary.uploader.destroy(songPublicId,{resource_type:"video"});
  await cloudinary.uploader.destroy(coverImagePublicId);


  const deletedSong = await Song.findByIdAndDelete(id);

return res.status(200)
          .json({success:true, message:"song deleted successfully"});


  } catch (error) {
    console.log(error.message);
    return res.status(500)
              .json({success:false, message:"somthing went wrong! song not deleted"})
  }
};


export const getAllSongs = async (req, res)=>{
try {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;


  const options = {
    page : page,
    limit :limit,
    sort:{createdAt:-1}
  }


  const result = await Song.paginate({},options);


    //  console.log('data:-',result);
    return res.status(200).json({success:true, message:"all song get", data:result})
} catch (error) {
  console.error(error.message);
  return res.json(500).json({sucess:false, message:"somting went wrong!"})
}
};


export const playSong = async (req, res)=>{
  try {
    const songId = req.params.id;
   
     if(!songId){
      return res.status(400).json({ message:"unauthorized request"})
     };

     const song = await Song.findById(songId);

     if(!song){
      return res.status(404).json({success:false, message:"Song not existed"});
     }
     console.log("song mil gya")
     return res.status(200).json({success:true, message:"song get",data:song})

  } catch (error) {
    console.error(error.message);
  return res.json(500).json({sucess:false, message:"somting went wrong!"})
  }
};


export const streamSong = async (req, res)=>{
try {
    const songId = req.params.id;
    console.log(songId);
    if(!songId){
       return res.status(404).json({message:"Song not Found!"});
    }
  
  
     const song = await Song.findById(songId);

     console.log("song :- ", song)
  
     if(!song){
      return res.status(404).json({message:"thers no song with this id"});
     };
  
    const cloudinaryUrl = song.songUrl;
    console.log("cloudinaryUrl:-", cloudinaryUrl );

 const range = req.headers.range;

   if(!range){

     const response = await axios({
      method:'get',
      url:cloudinaryUrl,
      responseType:'stream',
      })

     res.writeHead(200,{
      "Content-Type":'audio/mp3',
      "Content-Length":response.headers["content-length"]
     })
      return response.data.pipe(res);
   };

     const response = await axios({
      method:'get',
      url:cloudinaryUrl,
      responseType:'stream',
      headers:{
        Range:range
      }
      });


      res.writeHead(206, {
            "Content-Range": response.headers["content-range"],
            "Accept-Ranges": "bytes",
            "Content-Length": response.headers["content-length"],
            "Content-Type": "audio/mp3",
        });

        response.data.pipe(res);
  
  
} catch (error) {
  console.error(error)
  return res.status(500).json({success:false, message:"somthing went wrong"});
}

}