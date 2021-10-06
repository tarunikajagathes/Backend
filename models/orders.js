const mongoose=require('mongoose')
var newSchema1 = new mongoose.Schema({
    email: {
        type: String,
        index: true
    },
    items: Array,
    address:String,
    amount:String
})
var Orders = mongoose.model('Orders', newSchema1);
module.exports={Orders};