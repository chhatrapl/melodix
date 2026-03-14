import express from "express";
import { deleteSong, songUpload, getAllSongs, playSong } from "../controllers/songControllers.js";
import { upload } from "../middlewares/cloudinary.js";


const router = express.Router();


router.post('/songUpload', upload.fields([
                          {name:'songUrl', maxCount:1},
                          {name:'coverImage', maxCount:1}
                          ]),songUpload);


router.delete('/deletesong/:id', deleteSong);

router.get('/allSongs', getAllSongs);

router.get('/playsong/:id',playSong)


export default router;