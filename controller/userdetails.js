const findUser=require('../service/findUser')
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