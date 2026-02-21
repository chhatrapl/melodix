import express from "express";
import { songUpload } from "../controllers/songControllers.js";
import upload from "../middlewares/cloudinary.js"

const router = express.Router();


router.post('/songUpload', upload.fields([
    {name:'songUrl', maxCount:1},
    {name:'coverImage', maxCount:1}
]) ,songUpload);



export default router;