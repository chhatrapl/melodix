import express from "express";
import { createArtist, deletArtist } from "../controllers/artistController.js";
import {upload} from "../middlewares/cloudinary.js";

const router = express.Router();

router.post('/createArtist', upload.single('image'),createArtist);


router.delete('/deleteArtist/:id', deletArtist);


export default router;