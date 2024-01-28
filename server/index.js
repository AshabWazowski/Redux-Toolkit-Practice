import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/database.js';
import authRoute from './routes/authRoutes.js'
import dataRoute from './routes/dataRoutes.js'


dotenv.config()
const app = express();


const PORT = process.env.PORT || 4555;
const MONGODB = process.env.MONGODB_URL;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({urlencoded: true}));
app.use(cors())


app.use('/auth', authRoute)
app.use('/data', dataRoute)

app.get('/', (req, res)=>{
    res.send('hello');
})


connectDB(MONGODB);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} `);
})