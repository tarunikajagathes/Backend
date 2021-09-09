const removeValues=require('../service/removeValues')

exports.removeValue=async(req,res)=>{
    var email = req.body.email;
    var u_name={name:req.body.value.name,image:req.body.value.image,qty:req.body.value.qty,price:req.body.value.price};
   try{ await removeValues.values(email,u_name);
    res.status(200).send("updated");}
    catch(err){
        res.status(500).send(err);
    }
}