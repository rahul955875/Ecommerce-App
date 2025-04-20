import express from "express";
import {registerController,forgotPasswordController,loginController,testController}  from "../controller/authController.js";
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

// Forgot password || post
router.post("/forgot-password",forgotPasswordController)


//protected route auth user
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})
//protected route auth admin
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})

export default router;
