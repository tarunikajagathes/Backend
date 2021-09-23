const decUpdate=require('../service/decUpdate')
const jwt=require('jsonwebtoken')

exports.decrease=async(req,res)=>{
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    try{
    await decUpdate.inc(decode.email_u,req.body.value)
    res.status(200).send("decremented")
    }
    catch(err){
        res.status(500).send(err);
    }
}