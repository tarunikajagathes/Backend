const jwt=require('jsonwebtoken')
exports.auth=(req,res,next)=>{
    const token=req.headers.authorization;
    const decodetoken=jwt.verify(token,'my_secret_key')
    var e="";
    if(req.body.email==undefined){
        e=req.params.email;
    }
    else{
        e=req.body.email;
    }
    if(decodetoken.email_u!=e){
        res.sendStatus(401);
        throw 'Invalid Email'
    }
    else{
        next();
    }
}