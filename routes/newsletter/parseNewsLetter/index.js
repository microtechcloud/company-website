const {User,NewsLetter} = require('../../../lib/db');
module.exports = (req,res,next)=>{
    let {email} = req.body;
    console.log(req.body)
    if(!email || email===""){
        return res.json({success:false,message:"please provide an email address"})
    }

    NewsLetter.create({email:email},function(err,subscriber){
        if(err){return res.json({success:false,message:err.code.toString() === "11000" ? "email already subsribed" : "an error occoured while subscribing"})};

        if(!subscriber){return res.json({success:false,message:"could not subscribe user at the moment"})};

        User.findOne({email},function(err,user){
            if(err){return res.json({success:true,updated:false,  message:"error occoured"})};

            if(!user){return res.json({success:true,code:404, updated:false, message:"user not found"})};

            if(!user.newsLetter.subscribed){
                user.newsLetter.subscribed = !user.newsLetter.subscribed;
                user.save(function(err){
                    if(err){
                        return res.json({success:true,code:404, updated:false, message:"error updating client"});
                       
                }
                return res.json({success:true,code:200,updated:true})
            })
                
            };

            // return res,json({success:true,code:301,updated:true});

        })

        // res.json({success:true, message:"subscription successfull"});

    })

}