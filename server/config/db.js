const mongoose = require('mongoose');
const env=require("./envConfig");

const connect= async ()=>{
    try {
       await mongoose.connect(env.MONGO_URI);
       console.log("DB connected");

    } catch (error) {
        console.log(error.message);
        process.exit;
    }
};

module.exports=connect;