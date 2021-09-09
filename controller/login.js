const checkPass_createToken=require('../service/checkPass_createToken')
const findUser=require('../service/findUser')

exports.userLogin=async (req, res) => {
    let email_u = req.body.email;
    try{
    const email_f=await findUser.find(email_u)
    if(email_f.length!=2){
        let pass_u = req.body.password;
        const data = await checkPass_createToken.check(email_u,pass_u);
        if(data=="error"){
            res.sendStatus(404);
        }
        else{
            res.status(200).send(data);
        }
    }
    else{
        res.status(404);
    }
    }
    catch(err){
        res.send(err);
    }
}