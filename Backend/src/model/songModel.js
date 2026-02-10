import mongoose from "mongoose"

const songSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   artist :{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Artist",
    required:true
   },
  songUrl:{
      type:String,
      required:true
  },
  coverImage:{
    type:String,
    required:true
  }

},{timestamps:true});


const Song = mongoose.model("Song", songSchema);

export default Song;