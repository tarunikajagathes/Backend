const bdetails=require('../service/bdetails')
const jwt=require('jsonwebtoken')

exports.details=async (req, res) => {
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    try{
    var details = await bdetails.ishow(decode.email_u)
    res.status(200).send(details);
    }
    catch(err){
        res.status(500).send(err);
    }
}