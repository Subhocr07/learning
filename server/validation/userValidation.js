const {body}=require("express-validator");

const registerValidations=[
    body("name").not().isEmpty().withMessage("name is required"),
    body("email").isEmail().withMessage("email is required"),
    body("password").isLength({min:5}).withMessage("min length 5 is required"),
];

module.exports={
    registerValidations
}