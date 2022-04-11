
const express=require('express');
const cors = require('cors');
const app=express();

// var mongoose = require('mongoose')


var corsOptions = {
    origin: "http://localhost:3000"
  };

app.use((cors(corsOptions)))



const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


const bodyParser=require('body-parser');

  
const port=8000;

   
app.listen(port, function() {
    console.log("Server is listening at port:" + port);
}); 
  

app.use(bodyParser.urlencoded({extended: true})); 
  

app.use(bodyParser.json()); 
  
