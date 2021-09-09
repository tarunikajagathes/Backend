const mongoose=require('mongoose');
const {bakerys,vegetables,fruits}=require('../models/category')


exports.findValue=async(value)=>{
    var item;
    if(value=="bakery"){
       item= await bakerys.find({})
       //console.log(item);
    }
    else if(value=="vegetables"){
        item= await vegetables.find({})
    }
    else if(value=="fruits"){
        item=await fruits.find({})
    }
    else{
        item="";
    }
    return item;
}