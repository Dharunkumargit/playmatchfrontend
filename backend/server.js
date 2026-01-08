import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import cookieParser from 'cookie-parser';
import turfroutes from './turf/turf.routes.js'
import classroutes from './classes/Classes.route.js'
import userroutes from './user/user.route.js'

import coachroutes from "./coaches/Coach.routes.js"
import signuproutes from "./signup/signup.routes.js"
import sportroutes from "./Sport/sport.routes.js"

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())
app.use("/turfmanagement",turfroutes)
app.use("/classesmanagement",classroutes)
app.use("/user",userroutes)

app.use("/coachmanagement",coachroutes)
app.use("/signup",signuproutes)
app.use("/sportmanagement",sportroutes)



app.listen(port, () =>{ 
    console.log(`Server is running on port ${port}`)
});