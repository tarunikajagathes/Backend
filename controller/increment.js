const incUpdate=require('../service/incUpdate')

exports.increase=async(req,res)=>{
    const decode = req.body.email
    try{
    await incUpdate.inc(decode,req.body.value.name)
    res.status(200).send("incremented");
    }
    catch(err){
        res.status(500).send(err);
    }
}