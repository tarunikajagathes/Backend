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