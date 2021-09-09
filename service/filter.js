const {fruits,vegetables,bakerys}=require('../models/category');

exports.find=async(high,low,range,type)=>{
    if(type=="Fruits"){
        if(high=="high"&&range!=""){
        if(range=="1-50"){
            const res=await fruits.find({$and:[{price:{$gte:1}},{price:{$lte:50}}]}).sort({
                price: -1
            })
            return res;
        }
        else if(range=="51-100"){
            const res=await fruits.find({$and:[{price:{$gte:51}},{price:{$lte:100}}]}).sort({
                price: -1
            })
            return res;
        }
        else{
            if(range=="101-200"){
                const res=await fruits.find({$and:[{price:{$gte:101}},{price:{$lte:200}}]}).sort({
                    price: -1
                })
                return res;
            }
        }
    }
    else if(low=="low"&&range!=""){
        if(range=="1-50"){
            const res=await fruits.find({$and:[{price:{$gte:1}},{price:{$lte:50}}]}).sort({
                price: 1
            })
            return res;
        }
        else if(range=="51-100"){
            const res=await fruits.find({$and:[{price:{$gte:51}},{price:{$lte:100}}]}).sort({
                price: 1
            })
            return res;
        }
        else{
            if(range=="101-200"){
                const res=await fruits.find({$and:[{price:{$gte:101}},{price:{$lte:200}}]}).sort({
                    price: 1
                })
                return res;
            }
        }
    }
    else if(low==""&&range!=""&&high==""){
        if(range=="1-50"){
            const res=await fruits.find({$and:[{price:{$gte:1}},{price:{$lte:50}}]})
            return res;
        }
        else if(range=="51-100"){
            const res=await fruits.find({$and:[{price:{$gte:51}},{price:{$lte:100}}]})
            return res;
        }
        else{
            if(range=="101-200"){
                const res=await fruits.find({$and:[{price:{$gte:101}},{price:{$lte:200}}]})
                return res;
            }
        }
    }
    else if(low=="low"&&range==""&&high==""){
            const res=await fruits.find({}).sort({
                price: 1
            })
            return res;
        }
        else if(low==""&&range==""&&high=="high"){
            const res=await fruits.find({}).sort({
                price: -1
            })
            return res;
        }
        else{
            const res=await fruits.find({});
            return res;
        }
    }
    if(type=="Bakery"){
        if(high=="high"&&range!=""){
        if(range=="1-50"){
            const res=await bakerys.find({$and:[{price:{$gte:1}},{price:{$lte:50}}]}).sort({
                price: -1
            })
            return res;
        }
        else if(range=="51-100"){
            const res=await bakerys.find({$and:[{price:{$gte:51}},{price:{$lte:100}}]}).sort({
                price: -1
            })
            return res;
        }
        else{
            if(range=="101-200"){
                const res=await bakerys.find({$and:[{price:{$gte:101}},{price:{$lte:200}}]}).sort({
                    price: -1
                })
                return res;
            }
        }
    }
    else if(low=="low"&&range!=""){
        if(range=="1-50"){
            const res=await bakerys.find({$and:[{price:{$gte:1}},{price:{$lte:50}}]}).sort({
                price: 1
            })
            return res;
        }
        else if(range=="51-100"){
            const res=await bakerys.find({$and:[{price:{$gte:51}},{price:{$lte:100}}]}).sort({
                price: 1
            })
            return res;
        }
        else{
            if(range=="101-200"){
                const res=await bakerys.find({$and:[{price:{$gte:101}},{price:{$lte:200}}]}).sort({
                    price: 1
                })
                return res;
            }
        }
    }
    else if(low==""&&range!=""&&high==""){
        if(range=="1-50"){
            const res=await bakerys.find({$and:[{price:{$gte:1}},{price:{$lte:50}}]})
            return res;
        }
        else if(range=="51-100"){
            const res=await bakerys.find({$and:[{price:{$gte:51}},{price:{$lte:100}}]})
            return res;
        }
        else{
            if(range=="101-200"){
                const res=await bakerys.find({$and:[{price:{$gte:101}},{price:{$lte:200}}]})
                return res;
            }
        }
    }
    else if(low=="low"&&range==""&&high==""){
            const res=await bakerys.find({}).sort({
                price: 1
            })
            return res;
        }
        else if(low==""&&range==""&&high=="high"){
            const res=await bakerys.find({}).sort({
                price: -1
            })
            return res;
        }
        else{
            const res=await bakerys.find({});
            return res;
        }
    }
    if(type=="Vegetables"){
        if(high=="high"&&range!=""){
        if(range=="1-50"){
            const res=await vegetables.find({$and:[{price:{$gte:1}},{price:{$lte:50}}]}).sort({
                price: -1
            })
            return res;
        }
        else if(range=="51-100"){
            const res=await vegetables.find({$and:[{price:{$gte:51}},{price:{$lte:100}}]}).sort({
                price: -1
            })
            return res;
        }
        else{
            if(range=="101-200"){
                const res=await vegetables.find({$and:[{price:{$gte:101}},{price:{$lte:200}}]}).sort({
                    price: -1
                })
                return res;
            }
        }
    }
    else if(low=="low"&&range!=""){
        if(range=="1-50"){
            const res=await vegetables.find({$and:[{price:{$gte:1}},{price:{$lte:50}}]}).sort({
                price: 1
            })
            return res;
        }
        else if(range=="51-100"){
            const res=await vegetables.find({$and:[{price:{$gte:51}},{price:{$lte:100}}]}).sort({
                price: 1
            })
            return res;
        }
        else{
            if(range=="101-200"){
                const res=await vegetables.find({$and:[{price:{$gte:101}},{price:{$lte:200}}]}).sort({
                    price: 1
                })
                return res;
            }
        }
    }
    else if(low==""&&range!=""&&high==""){
        if(range=="1-50"){
            const res=await vegetables.find({$and:[{price:{$gte:1}},{price:{$lte:50}}]})
            return res;
        }
        else if(range=="51-100"){
            const res=await vegetables.find({$and:[{price:{$gte:51}},{price:{$lte:100}}]})
            return res;
        }
        else{
            if(range=="101-200"){
                const res=await vegetables.find({$and:[{price:{$gte:101}},{price:{$lte:200}}]})
                return res;
            }
        }
    }
    else if(low=="low"&&range==""&&high==""){
            const res=await vegetables.find({}).sort({
                price: 1
            })
            return res;
        }
        else if(low==""&&range==""&&high=="high"){
            const res=await vegetables.find({}).sort({
                price: -1
            })
            return res;
        }
        else{
            const res=await vegetables.find({});
            return res;
        }
    }
}