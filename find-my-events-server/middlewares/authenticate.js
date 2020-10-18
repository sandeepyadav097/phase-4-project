const jwtAuth= require("../utils/jwtauth")

function authenticate(req, res,next){
  
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      const verified=jwtAuth.verify(bearerToken)
      req.user=verified
      console.log(req.user)
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
  
  }

  module.exports= authenticate