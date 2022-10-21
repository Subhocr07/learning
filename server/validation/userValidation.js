const {body}=require("express-validator");

const registerValidations=[
    body("name").not().isEmpty().trim().escape().withMessage("name is required"),
    body("email").isEmail().normalizeEmail().trim().escape().withMessage("email is required"),
    body("password").isLength({min:5}).withMessage("min length 5 is required"),
];

const loginValidations = [
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('email is required'),
    body('password').not().isEmpty().withMessage('password is required')
]

module.exports={
    registerValidations,
    loginValidations
}