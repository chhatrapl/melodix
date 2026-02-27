import mongoose, { Schema } from "mongoose";

const artistSchema = new mongoose.Schema({
  
    title:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    imagePublicId:{
        type:String,
        required:true
    }
},
{timestamps:true})
 

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;