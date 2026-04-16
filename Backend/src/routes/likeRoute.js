import express from 'express';
import { getAllLikedSong, likeToggle } from '../controllers/likeController.js';


const router = express.Router();

router.post('/likesong/:id',likeToggle);

router.get('/likedsongs',getAllLikedSong);

export default router;