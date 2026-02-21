import Song from "../model/songModel.js";
import Artist from "../model/artistModel.js";



export const songUpload = async (req, res) => {
     try {
       const {title,artist} = req.body;

       console.log('title:',title);
       console.log('artist:',artist);

     

 
       if(!title || !artist || !req.files || !req.files?.songUrl || !req.files?.coverImage){
         return res.status(400).json({message:"all fields are required!"})
       };


       const songUrl = req.files.songUrl[0].path;
       const imageUrl = req.files.coverImage[0].path;

       const ArtistDoc = await Artist.findOne({title:artist});
       

       if(!ArtistDoc){
        return res.status(401).json({message:"artist not found!"})
       }
        
        const artistId = ArtistDoc._id;
 
       const existingSong = await Song.findOne({title,artistId});
 
       if(existingSong){
         return res.status(400).json({message:"song alreday uploaded"});
       }
 
   
    const newSong = await Song.create({
      title:title,
      artist:artistId,
      songUrl:songUrl,
      coverImage:imageUrl
    })

  
   
   return res.status(200).json({success:true, message:"song uploaded successfull."})


     } catch (error) {
       console.log(error.message);
    return res.status(500).json({success:false, message:"somthing went wrong!"})
     }     
};

