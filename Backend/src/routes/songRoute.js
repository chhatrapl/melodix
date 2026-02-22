import express from "express";
import { deleteSong, songUpload } from "../controllers/songControllers.js";
import upload from "../middlewares/cloudinary.js"

const router = express.Router();


router.post('/songUpload', upload.fields([
    {name:'songUrl', maxCount:1},
    {name:'coverImage', maxCount:1}
]) ,songUpload);


router.delete('/deletesong/:id', deleteSong);


export default router;