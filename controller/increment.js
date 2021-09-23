const incUpdate=require('../service/incUpdate')
const jwt=require('jsonwebtoken')
exports.increase=async(req,res)=>{
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    try{
    await incUpdate.inc(decode.email_u,req.body.value)
    res.status(200).send("incremented");
    }
    catch(err){
        res.status(500).send(err);
    }
}