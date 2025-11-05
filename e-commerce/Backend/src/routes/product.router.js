import expresss from 'express'
import * as productController from "../controllers/product.controller.js"
const router = expresss.Router()


router.get("/", productController.readController)
router.post("/create",productController.createController)


export default router