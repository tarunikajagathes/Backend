const mongoose =require( 'mongoose');
const {isEmail}=require('validator/lib/isEmail')

var schema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type:Object,
        require: true
    },
    phone_number:{
        type:Number,
        requite:true
    },
    address:{
        type:String,
        require:true
    },
    
    creation_dt: {
        type: Date,
        require: true
    }
});

const user= mongoose.model('User', schema);
module.exports = {user};