const {encrypt,decrypt}=require('../service/crypto')
const addUser =require('../service/addUser')
const findUser=require('../service/findUser')

exports.siginin=async(req, res) => {
    if (typeof req.body.email == "string") {
        var password=encrypt(req.body.password)
      addUser.addUser(req.body.email,req.body.username,password,req.body.phone,req.body.address);
        res.status(201).send("added");
    }
    else{
        res.sendStatus(400);
    }
}
exports.checkUser= async(req, res) => {
    let email_u = req.params.email;
    console.log(email_u);
    try{
    let find=await findUser.find(email_u);
    res.json(find);
    }
    catch(err){
        res.send(err);
    }
}