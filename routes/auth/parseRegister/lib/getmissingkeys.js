
module.exports = function getMissingKeys(body,keys){
                    let fields;
                    if(!body || typeof(body) !== "object"){
                        // console.log("here/....")
                        return "please provide a valid req.body"
                    };

                    if(!keys || typeof(keys) !== "object"){
                        // console.log("keys not objects")
                        return "please provide valid keys"
                    };
                    Missingfields = [];

                    keys.map((key,i)=>{
                        if(body[key]===undefined || body[key] === ""){
                            // console.log("undefined")
                        return Missingfields.push(key);
                        }

                        // console.log("else",body[key])
                    });

                    // if(Missingfields.length){
                    //     return
                    // }

                    return Missingfields;
}