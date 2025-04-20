import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import {createProductController} from '../controller/productController.js'
const router = express.Router()

//routes 
router.post('/create-product',requireSignIn, isAdmin,createProductController)

export default router;