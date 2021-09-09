const {UserItems}=require('../models/userItems')

exports.ditems=async(req,res)=>{
    const decode = req.body.email;
    try{
        await UserItems.deleteOne({email:decode});
        res.status(200).send("Deleted");
    }
    catch(err){
        res.status(500).send(err);
    }
}