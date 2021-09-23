const mongoose=require('mongoose')
var schema1 = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    image: {
        type: String
    },
    qty: {
        type: String
    },
    price: {
        type: Number
    }
});


const items=mongoose.model('items',schema1);
module.exports={items};
