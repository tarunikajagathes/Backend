const findUser=require('../service/findUser')
const changeValue=require('../service/changeValue')
const jwt=require('jsonwebtoken')

exports.aboutUser=async(req,res)=>{
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    try{
    const value=await findUser.find(decode.email_u);
    res.status(200).send(value);
    }
    catch(err){
        res.status(500).send(err);
    }
}

exports.update=async(req,res)=>{
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    const val=req.body.value;
    try{
    const sol=await changeValue.change(decode.email_u,val);
    res.status(200).send(sol);
    }
    catch(err){
        res.status(500).send(err);
    }
}