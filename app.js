// const express  = require('express');
import express from 'express'
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || '3001';
import web from './Routes/web.js'
import connectDB from './db/connectDB.js'
const DATABASE_URL = process.env.DATABASE_URL ||"mongodb://0.0.0.0:27017"

app.use(bodyParser.json());
// connection to database
connectDB(DATABASE_URL)
// console.log("connected to db");
// setting static files || middleware
app.use(express.static('Public'));
app.use(express.urlencoded({extended:true}))
// setting template engine
app.set('view engine' , 'ejs');
// Loading routes
app.use('/', web);

app.listen(port , ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})