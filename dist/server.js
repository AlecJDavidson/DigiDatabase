"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.js
var express_1 = __importDefault(require("express"));
// import path from 'path'
var mongoose_1 = __importDefault(require("mongoose"));
// import expressValidator from 'express-validator'
require('dotenv').config();
//import helmet
var helmet_1 = __importDefault(require("helmet"));
//import cors
var cors_1 = __importDefault(require("cors"));
var nodemailer = require('nodemailer');
var dotenv = require('dotenv').config({ path: __dirname + '/.env' });
var digimonRoute_1 = __importDefault(require("./routes/digimonRoute"));
//create app instant
var app = express_1.default();
// configure bodyparser to hande the post requests
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json());
//use helmet as middleware
app.use(helmet_1.default());
app.use(cors_1.default());
var options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false };
var mongo = mongoose_1.default.connect(process.env.DB_PATH || "", options).catch(function (err) { return console.log("Error", err); });
var db = mongoose_1.default.connection;
// Check DB Connection
if (!db)
    console.log("Error connecting db");
else
    console.log("DB Connected Successfully");
// Server Port
var port = process.env.PORT || 3000;
// Welcome/Login Site
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/api', function (req, res) {
    res.status(200).send('Welcome to the DigiData API');
});
app.use('/api', digimonRoute_1.default);
app.listen(port, function () {
    console.log("Running DigiData on Port " + port);
});
