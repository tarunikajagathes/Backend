const bdetails=require('../service/bdetails')

exports.details=async (req, res) => {
    const email =req.params.email; 
    try{
    var details = await bdetails.ishow(email)
    res.status(200).send(details);
    }
    catch(err){
        res.status(500).send(err);
    }
}