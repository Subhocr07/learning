const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const {registerValidations}=require("../../validation/userValidation")
const {userRegisterController}=require("../../controller/user/userController")

router.post("/register",registerValidations,userRegisterController);

module.exports=router;