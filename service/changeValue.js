const {user} =require('../models/user')

exports.change=async(email,value)=>{
    const uservalue=value.username;
    const number=value.phone;
    const place=value.address;
    await user.findOneAndUpdate({email:email},{username:uservalue,phone_number:number,address:place});
    return "Sucess";
}