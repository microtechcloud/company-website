
module.exports = function getMissingKeys(body,keys){
                    let fields;
                    if(!body || typeof(body) !== "object"){
                        return "please provide a valid req.body"
                    };

                    if(!keys || typeof(keys) !== "object"){
                        return "please provide valid keys"
                    };
                    Missingfields = [];

                    keys.map((key,i)=>{
                        if(body[key]===undefined){
                        return Missingfields.push(key);
                        }
                    });

                    // if(Missingfields.length){
                    //     return
                    // }

                    return Missingfields;
}