const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const {User} = require('../../lib/db');

module.exports = {
    initialization:()=>passport.initialize(),
    passportSession:()=>passport.session(),
    localStrategy: ()=>{
        return passport.use("local",new localStrategy({
            usernameField:"email",
            passwordField:"password"
        },function(username,password,done){
            console.log("autheticating...")
            User.findOne({email:username},function(err,user){
                if(err){return done(err, false, {message:"an error occoured"})};
                if(!user){return done(null,false,{status:404,message:"email is not registred, please register for you to login"})};

                user.isEqual(password,function(err,isEqual){
                    if(err){return done(err, false, {message:"could not authenticate password"})};

                    if(!isEqual){return done(null,false, {message:"error occoured while authenticating password."})};

                    return done(null,{firstName:user.firstName,lastName:user.lastName,email:user.email, NewsLetter:user.newsLetter}, {message:"you have successfully logged in"})
                })

            })
        }))
    },

    serializUser:()=>{
        return passport.serializeUser(function(user,done){
            if(!user){return done(null,false,{status:404,message:"could not serialize user"})};
            return done(null,user);
        })
    },

    deserializeUser:()=>{
        return passport.deserializeUser(function(user,done){
            if(!user){return done(null,false,{status:404,message:"could not desrialize user from session"})};
            User.findOne({email:user.email},function(err,isUser){
                if(err || !isUser){return done(err || {status:404,message:"failed to deserialize user"})};

                return done(null,{firstName:isUser.firstName,lastName:isUser.lastName,email:isUser.email, NewsLetter:isUser.newsLetter});
            })
        })
    }
}