const parseLogin = require("./parseLogin");
const parseRegister = require("./parseRegister");
const parseLogout = require("./parseLogout");

module.exports = {
    login:{
        get: (req,res,next)=>res.render("login/index"),
        post: (req,res,next)=>parseLogin(req,res,next)
    },
    register:{
        get: (req,res,next)=>res.render("register/index"),
        post: (req,res,next)=>parseRegister(req,res,next)

    },
    logout:{
        get:(req,res,next)=>parseLogout(req,res,next)
    }
}