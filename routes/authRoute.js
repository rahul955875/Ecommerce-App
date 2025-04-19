import express from "express";
import {registerController,loginController,testController}  from "../controller/authController.js";
import {isAdmin, requireSignIn} from '../middlewares/authMiddleware.js'
//router object
const router = express.Router();
//routing
//Register || method post
router.post("/register", registerController);

//test
router.get('/test',requireSignIn,isAdmin, testController)
//login || method postt
router.post("/login",loginController )

//protected route auth 
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})

export default router;
