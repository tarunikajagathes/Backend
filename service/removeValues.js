const {
    UserItems
}=require('../models/userItems')
exports.values=async(decode,u_name)=>{
    const res=await UserItems.findOneAndUpdate(
    {$and:[
        {"items.name": u_name.name},
        {email: decode}
    ]},
    {$pull:
        {items:{name:u_name.name}}
    }
)
return res;
}