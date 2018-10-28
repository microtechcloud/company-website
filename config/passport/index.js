const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const {User} = require('../../lib/db');

module.exports = {
    initialization:()=>passport.initialize(),
    passportSession:()=>passport.session(),
    localStrategy: ()=>{
        return passport.use(new localStrategy({
            usernameField:"email",
            passwordField:"password"
        },function(username,password,done){
            User.findOne({email:username},function(err,user){
                if(err){return done(err)};
                if(!user){return done(null,false,{status:404,message:"user not found"})};

                user.isEqual(password,function(err,isEqual){
                    if(err){return done(err)};

                    if(!isEqual){return done(null,false)};

                    return done(null,{firstName:user.firstName,lastName:user.lastName,email:user.email})
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

                return done(null,user);
            })
        })
    }
}