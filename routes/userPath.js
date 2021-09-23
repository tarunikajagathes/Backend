const express=require('express')
const router=express.Router()
const insert=require('../controller/insert')
const remove=require('../controller/remove')
const increment=require('../controller/increment')
const decrement=require('../controller/decrement')
const basketdelete=require('../controller/basketdelete')
const checkout=require('../controller/checkout')

router.put('/basket', insert.insertValues)
router.post('/basket/remove',remove.removeValue)
router.post('/basket/inc',increment.increase)
router.post('/basket/dec',decrement.decrease)
router.delete('/basket/clearbasket',basketdelete.ditems)
router.get('/basket/checkout',checkout.citems)

module.exports=router