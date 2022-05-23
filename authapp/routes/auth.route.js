const express=require("express");
const authRouter=express.Router();
const {LoginController,SignupController,UsersController} =require("../controllers/auth.controller");
const {encryptPassword,authenticateMiddleware} =require("../middlewares/auth.middleware");


authRouter.post("/login",LoginController)
authRouter.post("/users",authenticateMiddleware,UsersController)
authRouter.post("/signup",encryptPassword,SignupController)

module.exports=authRouter;