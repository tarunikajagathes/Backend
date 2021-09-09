const express=require('express')
const router=express.Router()
const filter=require('../controller/filter');
const categoryValue = require('../controller/categoryValue')


router.get('/:type',categoryValue.type)
router.put('/filter',filter.filterCatogery)

module.exports=router