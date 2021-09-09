const insertValue=require('../service/insertValue')

exports.insertValues=async (req, res) => {
    const email=req.body.email;
    var value_u = {
        name: req.body.value.name,
        image: req.body.value.image,
        qty: req.body.value.qty,
        price: req.body.value.price
    };
    try{
    const result=await insertValue.updateValue(email,value_u)
    res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err);
    }
}