import express from 'express'
import corse from 'cors'
import router from './routes/authRoute.js';

const app = express();



app.use(corse());
app.use(express.json());
app.use(express.urlencoded());


app.use('/api/v1/auth',router)






app.get('/', (req, res) => {
  res.send('API running 🚀')
})

export default app