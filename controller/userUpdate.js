const changeValue=require('../service/changeValue')
const jwt=require('jsonwebtoken')

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