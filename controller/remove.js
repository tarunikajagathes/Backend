const removeValues=require('../service/removeValues')
const jwt=require('jsonwebtoken')
exports.removeValue=async(req,res)=>{
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    var u_name={name:req.body.value};
   try{ await removeValues.values(decode.email_u,u_name);
    res.status(200).send("updated");}
    catch(err){
        res.status(500).send(err);
    }
}