import Like from '../model/likeModel.js';

export const likeToggle = async (req, res)=>{
 
    try {
       
        const songId = req.params.id;

        const userId ="6985f85fa1879779cf74174a";

        const isSongLiked = await Like.findOne({user:userId, song:songId});
       
        if(isSongLiked){
            await Like.findByIdAndDelete(isSongLiked._id);
            return res.status(200).json({message:"unliked"});
        }else{
            await Like.create({
                user:userId,
                song:songId
            });
            res.status(201).json({ isLiked: true, message: "liked" });
        };



    } catch (error) {
        console.error(error);
        return res.status(500).json({message:error.messsage});
    }
};


export const getAllLikedSong = async (req, res)=>{

try {
      const userId ="6985f85fa1879779cf74174a";
    
      const userLikes = await Like.find({user:userId}).populate("song");

      console.log("userLikes:-", userLikes);

      const likedSongs = userLikes.map((like)=>like.song);
      console.log("likedSongs:-",likedSongs);
    
      return res.status(200).json({success:true, message:"get all liked likedSogs",likedSongs})


} catch (error) {
    console.error(error.message);
  return res.json(500).json({sucess:false, message:"somting went wrong!"})
}
  

};