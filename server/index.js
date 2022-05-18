//we will set-up our server here
//including the modules which are required
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");  //used to interect with mongodb server

const app = express();  //here express function is exported from above module
require("dotenv").config(); 

app.use(cors());
app.use(express.json());

//creating a server
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server started on Port ${process.env.PORT}`)
})