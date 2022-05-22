//we will set-up our server here
//including the modules which are required
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");  //used to interect with mongodb server
const {userRoutes} = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");
const app = express();  //here express function is exported from above module
require("dotenv").config(); 

app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoutes);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser :true,
    useUnifiedTopology: true,
    useCreateIndex: true``
}).then(()=>{
    console.log("DB Connection Successful");
}).catch((err)=>{
    console.log(err.message);
});
//creating a server
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server started on Port ${process.env.PORT}`)
})