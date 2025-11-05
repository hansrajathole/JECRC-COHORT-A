import express from 'express'
import * as userController from '../controllers/user.controller.js'
const router = express.Router()


// router.use((req, res, next)=>{
//     console.log("router level middleware ");
//     next()
// })

router.get("/register",userController.getRegisterController)
router.post("/register",userController.registerController)
router.post("/login", userController.loginController)
router.get("/me/:userId" ,userController.meController)

export default router