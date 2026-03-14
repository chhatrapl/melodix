import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user,
        required:true
    },
    song:{
        type:mongoose.Schema.Types.ObjectId,
        ref:song,
        required:true
    }
},{timestamps:true});

likeSchmea.index({user:1, song:1},{unique:true});

const Like = mongoose.model('Like',likeSchema);

export default Like;