import express from 'express'

import {loginUser, postUsers } from '../controllers/userController.js'
import User from '../models/user.js'
const userRouter= express.Router()



userRouter.post("/",postUsers)
userRouter.post("/login",loginUser)
userRouter.get("/",(req,res)=>{
    User.find().then((result)=>{
        res.json(result)
    })
})

export default userRouter;;