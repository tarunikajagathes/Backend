const {user} = require('../models/user')

exports.find=async(email_u) =>{
    try{
    const value=await user.find({
        email: email_u
    });
    return value;
}
    catch(err){
        return err;
    }
    // console.log("Inside find-",value)
}