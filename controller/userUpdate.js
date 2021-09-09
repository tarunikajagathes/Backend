const changeValue=require('../service/changeValue')

exports.update=async(req,res)=>{
    const decode=req.body.email;
    const val=req.body.value;
    try{
    const sol=await changeValue.change(decode,val);
    res.status(200).send(sol);
    }
    catch(err){
        res.status(500).send(err);
    }
}