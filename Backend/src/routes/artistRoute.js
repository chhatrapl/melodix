import express from "express";
import { createArtist } from "../controllers/artistController.js";
import upload from "../middlewares/cloudinary.js";

const router = express.Router();

router.post('/createArtist', upload.single('image'),createArtist)


export default router;