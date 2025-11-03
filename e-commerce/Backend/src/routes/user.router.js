import express from 'express'
import * as userController from '../controllers/user.controller.js'
const router = express.Router()

router.post("/register",userController.registerController)
router.post("/login", userController.loginController)


export default router