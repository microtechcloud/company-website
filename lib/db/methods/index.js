const {UserSchema,NewsLetterSchema} = require('../schema');
const bcrypt = require('bcrypt');


UserSchema.pre("save",function(done){
    let self = this;

    let salt = 10;
    let password = self.password;

    bcrypt.hash(password,salt,function(err,hash){
        if(err){return done(err)};

        self.password = hash;
        done();
    })
})


UserSchema.methods.isEqual = function(password, cb){
    let self = this;
    let response;
    let hashedPassword = self.password;
    if(!password || typeof(password) !== "string"){return false}
    bcrypt.compare(password,hashedPassword,function(err,isMatch){
        let response = isMatch;
        if(err || !isMatch){return cb(!err ? null : err,false)}
        
        cb(null,true);
    });

}

module.exports = {UserSchema,NewsLetterSchema};