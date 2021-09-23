const {UserItems}=require('../models/userItems')
const jwt=require('jsonwebtoken')

exports.ditems=async(req,res)=>{
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    try{
        await UserItems.deleteOne({email:decode.email_u});
        res.status(200).send("Deleted");
    }
    catch(err){
        res.status(500).send(err);
    }
}