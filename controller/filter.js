const filter=require('../service/filter')

exports.filterCatogery=async(req,res)=>{
    try{
    const high=req.body.high;
    const low=req.body.low;
    const range=req.body.range;
    const type=req.body.type;
    const result=await filter.find(high,low,range,type);
    res.status(200).send(result)}
    catch(err){
        res.status(500).send(err);
    }
}