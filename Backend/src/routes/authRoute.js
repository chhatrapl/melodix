import express from 'express'
import { signup } from '../controllers/signUpController.js';
import { logIn } from '../controllers/loginController.js';

const router = express.Router();


router.post("/signup",signup);
router.post("/login",logIn);




export default router;