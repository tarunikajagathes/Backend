const {UserItems}=require('../models/userItems')
exports.ishow=async(d)=>{
    const res=await UserItems.find({
    email: d
}, {
    items: 1,
    _id: 0
});
return res;
}

exports.dec=async(decode,name)=>{
    const res=await UserItems.updateOne({
    $and:[
        {"items.name": name},
        {email: decode}
    ]
},{$inc:{"items.$.qty": -1 }})

return res;
}

exports.inc=async(decode,name)=>{
    const res=await UserItems.updateOne({
    $and:[
        {"items.name": name},
        {email: decode}
    ]
},{$inc:{"items.$.qty": 1 }})
return res;
}

exports.updateValue =async (e_decode, value_u) => {
    const email_found = await UserItems.aggregate([{
        $match: {
            email: e_decode
        }
    }]);
    const fruit_found = await UserItems.aggregate([{
        $match: {
            "items.name": value_u.name,
            email:e_decode
        }
    }]);
   // console.log("email-",email_found," ",fruit_found)
    if (email_found.length != 0 && fruit_found.length != 0) {
        await UserItems.updateOne({
            $and: [{
                    "items.name": value_u.name
                },
                {
                    email: e_decode
                }
            ]
        }, {
            $inc: {
                "items.$.qty": 1
            }
        })
    } else if (email_found.length != 0) {
        await UserItems.findOneAndUpdate({
            email: e_decode
        }, {
            $push: {
                items: value_u
            }
        })
    } else {
        await UserItems.insertMany({
            items: value_u,
            email: e_decode
        })
    }
    //console.log(await UserItems.find({email:e_decode}));
    return ("Successful");
}

exports.removeValues=async(decode,u_name)=>{
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