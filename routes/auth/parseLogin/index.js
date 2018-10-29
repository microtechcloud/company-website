const passport = require('passport');
module.exports = (req,res,next)=>{
    // console.log("here............../../")
    passport.authenticate('local', function(err, user, info) {
        // console.log(info)
        if (err) { return res.render("login/index",{message:"An error occoured while processing your request"}); }
        if (!user) { return res.render('login/index',{message:info ? info.message : "Could not find User"});}
        req.logIn(user, function(err) {
          if (err) { return res.render("login/index",{message:"Could not login user"}); }
          return res.redirect('/?user=' + user.firstName);
        });
      })(req, res, next);
}