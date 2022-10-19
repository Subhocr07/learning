const express=require('express')
const app=express();
const env=require("./config/envConfig");
const connect=require("./config/db");
const port =env.PORT ||7000;
console.log(env)
app.get('/',(req, res)=>res.json({msg: 'Welcome to Ecommerce'}));
app.listen(port,(err)=>{
    !err?(console.log(`server started at ${port}`)):console.log(err);
});
connect()

