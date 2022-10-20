const {validationResult} =require("express-validator");
const userRegisterController=(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors.array())
    }else{console.log(req.body)}
};

module.exports={
    userRegisterController
}