const jwt   = require('jsonwebtoken');
require('dotenv').config()

module.exports = {
 sign: (payload) => {
 
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
},
verify: (token) => {
 
   try{
     return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
   }catch (err){
     return false;
   }
},
 decode: (token) => {
    return jwt.decode(token, {complete: true});
 }
}