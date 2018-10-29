module.exports =(req,res,next)=>{
    console.log("login out......")
    req.logout();
    req.logOut();
    req.session.destroy(function(err){
        if(err){next(err)};
        console.log("logout")
    res.redirect("/");
    });
}