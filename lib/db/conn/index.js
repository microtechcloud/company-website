const mongoose = require("mongoose");

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,{useNewUrlParser:true});


//mongoose.connect(`mongodb+srv://lee:${process.env.DB_PASSWORD}@cluster0-vsuza.mongodb.net/${process.env.DB_NAME}?retryWrites=true`, {useNewUrlParser:true});

const db = mongoose.connection;


db.on("error",(err)=>console.log(err));

db.once("open",()=>console.log(`DATABASE CONNECTED`));

module.exports = {db};