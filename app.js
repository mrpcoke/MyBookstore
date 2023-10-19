/*
Sample Rest API for MongoDB Database using 
Node JS, express and various NPM packages (see below)
All code written by Paul Coke (c)2023
*/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const PORT = 5000; 


//import routes
postsRoute = require("./routes/posts");
favesRoute = require("./routes/faves");
usersRoute = require("./routes/users");

//set up middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/posts", postsRoute);
app.use("/faves", favesRoute);
app.use("/users", usersRoute);

//Connect to mongoose DB 
mongoose.set('strictQuery',true);

if(mongoose.connect("mongodb://127.0.0.1:27017/mybooks")){

    console.log("You are connected to Mongo DB")
}else{

    console.log("Error: Could not connect to MongoDB");
}



app.listen(PORT, ()=> console.log(`Port running on ${PORT}`));