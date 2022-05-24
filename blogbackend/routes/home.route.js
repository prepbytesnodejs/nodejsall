const { Router } = require("express");
const express=require("express");
const {GetHomePageData,GetSingleProduct,GetData}=require("../controllers/home.controller");

const homerouter=express.Router();


homerouter.get("/",GetHomePageData)

homerouter.get("/product/:productid",GetSingleProduct) ; //route param
homerouter.get("/data/:type",GetData) ; //route param

module.exports=homerouter;