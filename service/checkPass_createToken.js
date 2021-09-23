const crypto=require('../service/crypto')
const findUser =require('../service/findUser')
const jwt=require('jsonwebtoken');

exports.check=async(email_u,pass_u)=>{
    try{
        const email=await findUser.find(email_u);
    let pass = crypto.decrypt(email.data[0].password);
    if (pass_u == pass) {
        const token = jwt.sign({
            email_u
        }, 'my_secret_key');
       return {token:token}
    } else {
        // send status 401 Unauthorized
        return "error";
    }
    }
    catch(err){
        console.log(err)
    }
    
    
}
// res.send("success")
