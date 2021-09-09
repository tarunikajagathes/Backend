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


const bakerys=mongoose.model('Bakerys',schema1);
const fruits=mongoose.model('Fruits',schema1);
const vegetables=mongoose.model('Vegetables',schema1);
module.exports={bakerys,fruits,vegetables};
