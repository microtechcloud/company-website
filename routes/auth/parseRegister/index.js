const {getMissingKeys} = require('./lib');
const {User} = require('../../../lib/db');
module.exports = (req,res,next)=>{
   let  {firstName,lastName,email,confirmPassword,password}= req.body;

    // let keys = [firstName,lastName,email,confirmPassword,password];
    let keys = Object.keys(req.body)
    console.log("keys",keys)
    let missingKeys = getMissingKeys(req.body, keys);

    // let expectedKeys

    console.log(missingKeys)

    if(missingKeys.length){
        console.log("missingKeys",missingKeys)
        return res.render("register/index",{message:"some fields missing",fields:missingKeys});
    };


    User.create({firstName,lastName,email,password},function(err,user){
        console.log(err)
        if(err && err.code.toString() ==="11000"){return res.render("register/index",{message:"Email already in use",fields:false})};
        if(err){return res.render("register/index",{message:"An Error Occoured",fields:false})};
        if(!user){return res.render("register/index",{message:"something went wrong",fields:false})};

        res.render("login/index",{message:"successfully registered in",fields:false});
    })
   

  
   

}

