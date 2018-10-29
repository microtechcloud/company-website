const parseDashboard = require('./parseDashboard');

module.exports = {
    dashboard:{
        get:(req,res,next)=>parseDashboard(req,res,next)
    },
    adminLogin:{
        get: (req,res,next)=>res.render("admin/login/index")
    },
    adminForgotPassword:{
        get: (req,res,next)=>res.render("admin/forgotPassword/index")
    },

    adminRegistration:{
        get: (req,res,next)=>res.render("admin/registration/index")
    }
}