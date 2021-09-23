const insertValue=require('../service/insertValue')
const jwt=require('jsonwebtoken')

exports.insertValues=async (req, res) => {
    const decode=jwt.verify(req.headers.authorization,"my_secret_key");
    var value_u = {
        name: req.body.value.name,
        image: req.body.value.image,
        qty: req.body.value.qty,
        price: req.body.value.price
    };
    try{
    const result=await insertValue.updateValue(decode.email_u,value_u)
    res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err);
    }
}