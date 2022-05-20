const express=require("express");
const approuter=express.Router();
const {rootController} =require("../controllers/app.controller");


approuter.get("/",rootController)


module.exports=approuter;

