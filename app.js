require('dotenv').config();
const express = require('express');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const session = require("express-session");
const {db} = require("./lib/db");
const cors = require('cors');
const logger = require('morgan');
const MongoDbStore = require("connect-mongo")(session);
const path = require('path');
const createError = require("http-errors");
const Routes = require('./routes');
const {initialization,passportSession,localStrategy,serializUser,deserializeUser} = require('./config/passport');


const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(flash());
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/static", express.static(path.join(__dirname,"static")));

app.use(session({
    name:"mc_tech_auth",
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    store:new MongoDbStore({mongooseConnection:db}),
    cookie:{maxAge:1000*60*60*24*7*360,secure:false}

}))

app.use(initialization());
app.use(passportSession());
localStrategy();
serializUser();
deserializeUser();

//get user
app.use(function(req,res,next){
    // console.log("middleware",req.user)
    res.locals.user = req.user ===undefined ? false : req.user;
    next();
});

// //set cache for assets
// app.use(function(req,res,next){
//     res.append("Cache-Control","public,max-age=31536000");
//     // res.append("Cache-Control","max-age=31536000");
//     next();
// });

app.use("/",Routes);
    


//catch 404
app.use(function(req,res,next){
    next(createError(404)); 
});

app.use(function(err,req,res,next){

    if(!err){return next()}
    
    console.log(err)
    console.log(req.user)
    let error = {};
    error.status = err.status;
    error.message = err.message;
    res.locals.err = err;
    res.status(err.code || err.status || 500);
    res.render("error/index");
});


app.listen(port,()=>console.log(`APP STARTED ON PORT ${port}`));
