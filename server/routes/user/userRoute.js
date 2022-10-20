const express=require('express');
const router=express.Router();
const {registerValidations,loginValidations}=require("../../validation/userValidation")
const {userRegisterController,userLoginController}=require("../../controller/user/userController")

router.post("/register",registerValidations,userRegisterController);
router.post("/login",loginValidations,userLoginController);

module.exports=router;