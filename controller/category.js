const findValue = require('../service/catogery')
const filter=require('../service/catogery')

exports.type = async (req, res) => {
    try {
        const details = await findValue.findValue(req.params.type);
        res.status(200).send(details);
    }
catch (err) {
    res.status(500).send(err);
}
}

exports.filterCatogery=async(req,res)=>{
    try{
    const high=req.body.high;
    const low=req.body.low;
    const range=req.body.range;
    const value=req.body.type;
    const result=await filter.find(high,low,range,value);
    res.status(200).send(result)}
    catch(err){
        res.status(500).send(err);
    }
}