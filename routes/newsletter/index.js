const parseNewsLetter = require('./parseNewsLetter');

module.exports = {
    subscription:{
        post:(req,res,next)=>parseNewsLetter(req,res,next)
    }
    
}