const mongoose=require('mongoose');
const {items}=require('../models/category')


exports.findValue=async(value)=>{
    var item;
       item= await items.find({type:value})
    return item;
}