import mongoose from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2';

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
  songPublicId:{
    type:String,
    required:true
  },
  coverImage:{
    type:String,
    required:true
  },
  coverImagePublicId:{
    type:String,
    required:true
  }

},{timestamps:true});

songSchema.plugin(mongoosePaginate);

const Song = mongoose.model("Song", songSchema);

export default Song;