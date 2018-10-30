const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String,unique:true, lowercase:true},
    newsLetter:{
        email:{type:String, lowercase:true},
        phone:{type:String},
        subscribed:{type:Boolean, default:false}
    },
    password:{type:String}

});


const NewsLetterSchema = new Schema({
    email:{type:String,unique:true},
    categories:[],
});



module.exports = {UserSchema,NewsLetterSchema};