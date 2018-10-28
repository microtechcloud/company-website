const {getMissingKeys} = require('./lib');
const {User} = require('../../../lib/db');
module.exports = (req,res,next)=>{
   let  {firstName,lastName,email,confirmPassword,password}= req.body;

    // let keys = [firstName,lastName,email,confirmPassword,password];
    let keys = Object.keys(req.body)

    let missingKeys = getMissingKeys(req.body, keys);

    if(missingKeys.length){
        return next({status:401,message:"some keys missing",missingKeys});
    };


    User.create({firstName,lastName,email,password},function(err,user){
        if(!err){return next(err)};
        if(!user){return next({status:401,message:"could not register user"})};

        res.render("login/index",{message:"successfully logged in"});
    })
   

  
   

}

