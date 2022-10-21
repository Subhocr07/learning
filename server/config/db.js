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

// const connect=async()=>{mongoose
//   .connect(env.MONGO_URI)
//   .then(() => console.log("Db connection successfully"))
//   .catch((err) => {
//     console.log(err);
// })}

module.exports=connect;