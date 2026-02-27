import Artist from "../model/artistModel.js";
import {v2 as cloudinary} from 'cloudinary';
import Song from "../model/songModel.js";
import fs from "fs";



const cleanUpFiles = (files) => {
  if(files.image) fs.unlinkSync(files.image[0].path);
};

export const createArtist = async (req, res)=>{

   try {
     const {title} = req.body;
     const files = req.files;
     console.log('title:',title)

       

 
      if(!title || !req.file?.path){
        if(files) cleanUpFiles(files)
          return res.status(400).json({message:"all fields are required!"})
        };
 
       const imageLocalPath = req.file.path;
       console.log('imageLocalPath:-',imageLocalPath);

        const isArtistExist = await Artist.findOne({title});
 
        if(isArtistExist){
            if(files) cleanUpFiles(files)
         return res.status(400).json({message:"artist already existed!"});
         }
 
       const imageRes = await cloudinary.uploader.upload(imageLocalPath,{
        resource_type:'auto',
        folder:'images'
       });

       console.log('imageUrl:-', imageRes.secure_url);
       console.log('imagePublicId:-', imageRes.public_id);

           const newArtist = await Artist.create({
               title:title,
               image:imageRes.secure_url,
               imagePublicId:imageRes.public_id
           });
       
           if(files) cleanUpFiles(files);

       return res.status(200).json({success:true, message:"artist created successfull"})
 
   } catch (error) {
      console.log(error.message);
      return res.status(500).json({success:false, message:"somthing went wrong!"})
   };
};


export const deletArtist = async (req, res)=>{
    try {
    
         const {id}=req.params;
         console.log('artistid;-', id);
    
         if(!id){
            return res.status(404).json({message:"invalid params!"});
         }
         
         const artist = await Artist.findById(id);

         console.log('artist:-',artist);
    
         if(!artist){
            return res.status(404).json({message:"artist not found!"})
         };
       
         

         const songs = await Song.find({artist:id});

         console.log(songs)
    
        if(songs.length === 0){
            await Artist.findByIdAndDelete(id);
            return res.status(201).json({message:"artist deleted without song"})

        }

        const deletePromises = songs.map( (song)=>{
                   cloudinary.uploader.destroy(song.songPublicId);
            return cloudinary.uploader.destroy(song.coverImagePublicId);
        })    

       await Promise.all(deletePromises);

       await Song.deleteMany({artist:id});

       const artistImagePublicId = artist.imagePublicId;
       console.log(artistImagePublicId);
       await cloudinary.uploader.destroy(artistImagePublicId);
       await Artist.findByIdAndDelete(artist);


        return res.status(200).json({message:"artist deleted",songs:songs})
} catch (error) {
    console.error(error.message);
    return res.status(500).json({message:"somthing went wrong"})
}
   

};