import Artist from "../model/artistModel.js";


export const createArtist = async (req, res)=>{

   try {
     const {title} = req.body;

     console.log('title:',title)

       

 
      if(!title || !req.file?.path){
          return res.status(400).json({message:"all fields are required!"})
        };
 
       const imageUrl = req.file.path;
       console.log('imagurl:',imageUrl);

        const isArtistExist = await Artist.findOne({title});
 
        if(isArtistExist){
         return res.status(400).json({message:"artist already existed!"});
         }
 
       
           const newArtist = await Artist.create({
               title:title,
               image:imageUrl
           })
       

       return res.status(200).json({success:true, message:"artist created successfull"})
 
   } catch (error) {
      console.log(error.message);
      return res.status(500).json({success:false, message:"somthing went wrong!"})
   };
};