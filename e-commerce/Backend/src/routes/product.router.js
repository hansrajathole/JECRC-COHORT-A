import expresss from 'express'
import protectedRoute from '../middleware/protected.js'
import * as productController from "../controllers/product.controller.js"
const router = expresss.Router()


router.get("/", productController.readController)
router.post("/create",protectedRoute ,productController.createController)
router.put("/update/:productId",protectedRoute , productController.updateController)
router.get("/detail/:productId", protectedRoute, productController.detailController)
router.delete("/delete/:productId",protectedRoute, productController.deleteController)


export default router