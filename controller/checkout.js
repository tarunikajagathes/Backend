const {Orders}=require('../models/userItems')
const {UserItems}=require('../models/userItems');
const jwt=require('jsonwebtoken')

exports.citems=async(req,res)=>{
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    try{
    const user_items=await UserItems.findOne({email:decode.email_u});
    await Orders.insertMany({email:decode.email_u,items:user_items.items});
    res.status(200).send("sucess");
    }
    catch(err){
        res.status(500).send(err);
    }
}