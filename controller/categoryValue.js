const findValue =require('../service/findValue')

exports.type=async(req, res) => {
    try{
    if(req.params.type=="Fruits"){
    var details =await findValue.findValue("fruits");
    res.status(200).send(details);}
    if(req.params.type=="Vegetables"){
    var details =await findValue.findValue("vegetables");
    res.status(200).send(details);}
    if(req.params.type=="Bakery"){
    var details =await findValue.findValue("bakery");
    res.status(200).send(details);}
    }
    catch(err){
        res.status(404).send(err);
    }
}