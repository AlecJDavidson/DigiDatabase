// server.js
import express, {Application , Request,Response , NextFunction} from 'express'
// import path from 'path'
import mongoose from 'mongoose'
// import expressValidator from 'express-validator'
require('dotenv').config();
//import helmet
import helmet from 'helmet'
//import cors
import cors from 'cors'
var nodemailer = require('nodemailer');
const dotenv = require('dotenv').config({ path: __dirname+'/.env' });

import  digimonRoute from './routes/digimonRoute'

//create app instant
const app: Application = express();
// configure bodyparser to hande the post requests
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//use helmet as middleware
app.use(helmet())
app.use(cors())


const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true,useFindAndModify:false }
const mongo = mongoose.connect(process.env.DB_PATH||"", options).catch(err=>console.log("Error",err))
const db = mongoose.connection;

// Check DB Connection
if (!db)
    console.log("Error connecting db");
else
    console.log("DB Connected Successfully");

// Server Port
const port = process.env.PORT || 3000;

// Welcome/Login Site

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/api',(req:Request,res:Response)=>{
    res.status(200).send('Welcome to the DigiData API')
})
app.use('/api', digimonRoute);


app.listen(port, function() {
    console.log("Running DigiData on Port " + port);
});
