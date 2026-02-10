import mongoose, { Schema } from "mongoose";

const artistSchema = new mongoose.Schema({
  
    title:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    }
},
{timestamps:true})
 

const Artis = mongoose.model("Artist", artistSchema);

export default Artis;