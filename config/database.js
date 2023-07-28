const mongoose = require ('mongoose');
//const dotenv=require('dotenv')
//dotenv.config({path: 'config.env'})
//mongoose.connect("mongodb+srv://Ravi:COtJieb3AxMIo9AD@cluster0.qnb48ii.mongodb.net/")
mongoose.connect('mongodb+srv://Ravi:COtJieb3AxMIo9AD@cluster0.qnb48ii.mongodb.net/',  { 
       useNewUrlParser: true,
       //useFindAndModify: false,
       useUnifiedTopology: true
  });
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to Mongodb"));

db.once('open',function(){
    console.log("Successfully connect to the database")
});

module.exports=db;