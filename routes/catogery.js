const express=require('express')
const router=express.Router()
const category = require('../controller/category')


router.get('/:type',category.type)
router.put('/filter',category.filterCatogery)

module.exports=router