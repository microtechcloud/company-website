require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const Routes = require('./routes');


const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/static", express.static(path.join(__dirname,"static")));

app.use("/",Routes);



app.listen(port,()=>console.log(`APP STARTED ON PORT ${port}`));
