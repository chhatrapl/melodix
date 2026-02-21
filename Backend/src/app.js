import express from 'express'
import corse from 'cors'
import authRouter from './routes/authRoute.js';
import songRouter from './routes/songRoute.js';
import artistRouter from './routes/artistRoute.js';

const app = express();



app.use(corse());
app.use(express.json());
app.use(express.urlencoded());

//user routes
app.use('/api/v1/auth',authRouter);


//songroutes
app.use('/api/v1/upload',songRouter);


//artist routes
app.use('/api/v1/artist',artistRouter);






app.get('/', (req, res) => {
  res.send('API running 🚀')
})

export default app