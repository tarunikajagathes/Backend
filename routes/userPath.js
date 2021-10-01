const express=require('express')
const router=express.Router()
const userBasket=require('../controller/userBasket')

router.put('/basket', userBasket.insertValues)
router.post('/basket/remove',userBasket.removeValue)
router.post('/basket/inc',userBasket.increase)
router.post('/basket/dec',userBasket.decrease)
router.delete('/basket/clearbasket',userBasket.ditems)
router.get('/basket/checkout',userBasket.citems)

module.exports=router