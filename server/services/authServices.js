const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config/envConfig');
const hashedPassword= async (password)=>{
    const salt= await bcrypt.genSalt(10);
    const hashed=await bcrypt.hash(password,salt);
    return hashed;
}

const createToken=(user)=>{
    const token=jwt.sign(user,JWT_SECRET,{
        expiresIn:"7d"
    })
    return token;
}

const comparePassword=async(password,dbPassword)=>{
    return await bcrypt.compare(password,dbPassword)
}
module.exports={
    hashedPassword,
    createToken,
    comparePassword
}