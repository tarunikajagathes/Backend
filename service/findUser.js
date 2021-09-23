const {user} = require('../models/user')

exports.find=async(email_u) =>{
    try{
    const value=await user.find({
        email: email_u
    });
    if(value.length!=0){
    return {data:value};
    }
    else{
        return {data:"no data"};
    }
}
    catch(err){
        return {data:"no data"};
    }
}