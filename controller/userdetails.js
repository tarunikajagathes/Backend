const findUser=require('../service/findUser')

exports.aboutUser=async(req,res)=>{
    const user=req.params.email;
    try{
    const value=await findUser.find(user);
    res.status(200).send(value);
    }
    catch(err){
        res.status(500).send(err);
    }
}