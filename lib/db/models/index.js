const {UserSchema,NewsLetterSchema} = require('../methods');
const mongoose = require('mongoose');

const User = mongoose.model("Users",UserSchema);
const NewsLetter = mongoose.model("NewsLetterSubscribers",NewsLetterSchema);

module.exports = {User, NewsLetter};