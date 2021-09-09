const mongoose=require('mongoose')
var newSchema = new mongoose.Schema({
    email: {
        type: String,
        index: true
    },
    items: Array
})
var UserItems = mongoose.model('UserItems', newSchema);
var Orders = mongoose.model('Orders', newSchema);
module.exports={UserItems,Orders};