const {validationResult} =require("express-validator");
const userModel=require("../../models/userSchema")
const {hashedPassword,comparePassword}= require("../../services/authServices");
const {createToken}=require("../../services/authServices")

//register route

const userRegisterController=async (req,res)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const {name, email, password} = req.body;
        try {
            const emailExist = await userModel.findOne({email});
            if(!emailExist) {
                const hashed = await hashedPassword(password);
                const user = await userModel.create({
                    name,
                    email,
                    password: hashed
                });
                const token = createToken({id: user._id, name: user.name});
                return res.status(201).json({msg: 'Your account has been created!', token});
            } else {
                // email already taken
                return res.status(400).json({errors: [{msg: `${email} is already taken`, param: 'email'}]})
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json("Server internal error!");
        }
    } else {
        // validations failed
        return res.status(400).json({errors: errors.array()})
    }
};

//login route
const userLoginController = async (req, res) => {
    const {email,password} = req.body;
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        try {
            const user = await userModel.findOne({email});
            if(user) {
                 if(await comparePassword(password, user.password)) {
                    const token = createToken({id: user._id, name: user.name});
                    if(user.admin) {
                       return res.status(201).json({token, admin: true});
                    } else {
                       return res.status(201).json({token, admin: false});
                    }
                 } else {
                     return res.status(400).json({errors: [{msg: 'password not matched!', param: 'password'}]})
                 }
            } else {
                return res.status(400).json({errors: [{msg: `${email} is not found!`, param: 'email'}]});
            }
        } catch (error) {
            console.log(error.message)
            return res.status(500).json('Server internal error!');
        }
    } else {
       //  validations failed
       return res.status(400).json({errors: errors.array()})
    }

}






module.exports={
    userRegisterController,
    userLoginController
}