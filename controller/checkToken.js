const jwt=require('jsonwebtoken')
exports.auth=(req,res,next)=>{
    const token=req.headers.authorization;
    try{
    const decodetoken=jwt.verify(token,'my_secret_key')
      next();
    }
    catch{
        res.status(401);
        throw 'Invalid Email'
    }
}