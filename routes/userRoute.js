import express from 'express'

import {loginUser, postUsers, getUser } from '../controllers/userController.js'
import User from '../models/user.js'
const userRouter= express.Router()



userRouter.post("/",postUsers)
userRouter.post("/login",loginUser)
userRouter.get("/",getUser)


export default userRouter;;