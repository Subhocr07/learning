const express=require('express')
const app=express();
const env=require("./config/envConfig");
const connect=require("./config/db");
const userRoutes=require("./routes/user/userRoute")
const port =env.PORT ||7000;
//middlewares
app.use(express.json());

console.log(env)
app.get('/',(req, res)=>res.json({msg: 'Welcome to Ecommerce'}));
app.listen(port,(err)=>{
    !err?(console.log(`server started at ${port}`)):console.log(err);
});
connect()

//routes
app.use("/user",userRoutes)
