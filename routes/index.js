const express = require('express');
const router = express.Router();
const {login,register,logout} = require('./auth');
const {dashboard,adminLogin,adminForgotPassword,adminRegistration} = require('./admin');
const {subscription} = require('./newsletter');
const passport = require('passport');

router.get("/", (req,res,next)=>{
    // console.log("session", req.session);
    // console.log("user",req.user);
    res.render("index")
});

/**
 * GET LOGIN
*/

router.get("/auth/login",login.get);

/**
 * POST LOGIN
*/

// router.post("/auth/login",passport.authenticate("local",{successRedirect:"/",failureRedirect:"/auth/login",failureFlash:true}));
router.post("/auth/login",login.post);

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


/**
 * GET DASHBOARD
*/

router.get("/admin/dashboard",dashboard.get);

/**
 * GET ADMIN DASHBOARD LOGIN
*/

router.get("/auth/admin/login",adminLogin.get);

/**
 * GET ADMIN FORGOT PASSWORD
*/

router.get("/auth/admin/forgot_password",adminForgotPassword.get);

/**
 * GET ADMIN DASHBOARD REGISTRATION
*/

router.get("/auth/admin/registration",adminRegistration.get);

/**
 * POST NEWS LETTER SUBSCRIPTION
*/

router.post("/newsletter/subscription",subscription.post);

module.exports = router;