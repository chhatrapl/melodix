import Like from '../model/likeModel.js';

export const likeTogle = async (req, res)=>{
 
    try {
       
        const songId = req.params.id;

        const userId ="6985f85fa1879779cf74174a";

        const isSongLiked = await Like.findOne({user:userId, song:songId});
       
        if(isSongLiked){
            await Like.findByIdAndDelete(isSongLiked._id);
            return res.status(200).json({message:"unliked"});
        }else{
            await like.create({
                user:userId,
                song:songId
            });
            res.status(201).json({ isLiked: true, message: "liked" });
        };



    } catch (error) {
        
    }
};