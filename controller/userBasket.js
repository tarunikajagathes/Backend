const {UserItems}=require('../models/userItems')
const {Orders}=require('../models/userItems')
const basket=require('../service/basket')
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

exports.details=async (req, res) => {
    const decode=jwt.verify(req.headers.authorization,"my_secret_key"); 
    try{
    const details = await basket.ishow(decode.email_u)
    res.status(200).send(details);
    }
    catch(err){
        res.status(500).send(err);
    }
}

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

exports.decrease=async(req,res)=>{
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    try{
    await basket.dec(decode.email_u,req.body.value)
    res.status(200).send("decremented")
    }
    catch(err){
        res.status(500).send(err);
    }
}

exports.increase=async(req,res)=>{
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    try{
    await basket.inc(decode.email_u,req.body.value)
    res.status(200).send("incremented");
    }
    catch(err){
        res.status(500).send(err);
    }
}

exports.insertValues=async (req, res) => {
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    var value_u = {
        name: req.body.value.name,
        image: req.body.value.image,
        qty: req.body.value.qty,
        price: req.body.value.price
    };
    try{
    const result=await basket.updateValue(decode.email_u,value_u)
    res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err);
    }
}

exports.removeValue=async(req,res)=>{
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    var u_name={name:req.body.value};
   try{ await basket.removeValues(decode.email_u,u_name);
    res.status(200).send("updated");}
    catch(err){
        res.status(500).send(err);
    }
}