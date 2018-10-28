const express = require('express');
const router = express.Router();
const {login,register,logout} = require('./auth');
const passport = require('passport');

router.get("/", (req,res,next)=>{
    console.log("session", req.session);
    console.log("user",req.user);
    res.render("index")
});

/**
 * GET LOGIN
*/

router.get("/auth/login",login.get);

/**
 * POST LOGIN
*/

router.post("/auth/login",passport.authenticate("local"),login.post);

/**
 * GET REGISTER
*/

router.get("/auth/register",register.get);

/**
 * POST REGISTER
*/

router.post("/auth/register",register.post);


/**
 * GET LOGOUT
*/

router.get("/auth/logout",logout.get);

module.exports = router;