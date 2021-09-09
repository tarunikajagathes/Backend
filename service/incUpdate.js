const {UserItems} = require('../models/userItems')

exports.inc=async(decode,name)=>{
    const res=await UserItems.updateOne({
    $and:[
        {"items.name": name},
        {email: decode}
    ]
},{$inc:{"items.$.qty": 1 }})
return res;
}