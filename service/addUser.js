const {user} =require('../models/user')


exports.addUser=(email_u,username_u,password_u,phone,address)=>{
    user.insertMany({email: email_u,
        username:username_u,
        password: password_u,
        phone_number:phone,
        address:address,
        creation_dt: Date.now()});
}
