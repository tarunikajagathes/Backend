const {validationResult}=require('express-validator');

exports.signin=(req,res,next)=>{
     const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(422).json(errors)
    }
    else{
        next();
    }
}

exports.login=(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(422).json(errors)
    }
    else{
        next();
    }
}