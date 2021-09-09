const {Orders}=require('../models/userItems')
const {UserItems}=require('../models/userItems');


exports.citems=async(req,res)=>{
    const decode = req.body.email;
    try{
    const user_items=await UserItems.findOne({email:decode});
    await Orders.insertMany({email:decode,items:user_items.items});
    res.status(200).send("sucess");
    }
    catch(err){
        res.status(500).send(err);
    }
}