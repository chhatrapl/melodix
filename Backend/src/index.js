import app from './app.js';
import dotenv from 'dotenv';
import { connectDB } from './db/db.js';

dotenv.config();
connectDB();


const port = process.env.PORT || 4000



app.listen(port,()=>{
    console.log(`server is runnig at port ${port}`)
});