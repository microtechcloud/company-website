module.exports = (req,res,next)=>{
    req.logout();

    req.session.destroy(function(err){
        if(err){next(err)};
        console.log("logout")
        res.redirect("/");
    })
    
}