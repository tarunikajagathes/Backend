const express=require('express')
const router=express.Router()
const siginin=require('../controller/signin')
const login=require('../controller/login')
const basketdetails=require('../controller/basketdetails')
const userdetails=require('../controller/userdetails')
const userUpdate=require('../controller/userUpdate')
const checkToken=require('../controller/checkToken')



router.post('/signin',siginin.siginin)
router.get('/email/:email',siginin.checkUser)
router.post('/user/login',login.userLogin)
router.get('/userdetails/:email',checkToken.auth,userdetails.aboutUser)
router.put('/update',checkToken.auth,userUpdate.update)
router.get('/details/:email',checkToken.auth,basketdetails.details)



module.exports=router