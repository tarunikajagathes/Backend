const decUpdate=require('../service/decUpdate')

exports.decrease=async(req,res)=>{
    const decode = req.body.email
    try{
    await decUpdate.inc(decode,req.body.value.name)
    res.status(200).send("decremented")
    }
    catch(err){
        res.status(500).send(err);
    }
}