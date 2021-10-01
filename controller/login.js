const checkPass_createToken=require('../service/checkPass_createToken')
const findUser=require('../service/findUser')

exports.userLogin=async (req, res) => {
    const email_u = req.body.email;
    try{
    const email_f=await findUser.find(email_u)
    if(email_f.data!="no data"){
        const pass_u = req.body.password;
        const data = await checkPass_createToken.check(email_u,pass_u);
        if(data=="error"){
            res.sendStatus(403);
        }
        else{
            res.status(200).send(data);
        }
    }
    else{
        res.send(email_f);
    }
    }
    catch(err){
        res.send(err);
    }
}