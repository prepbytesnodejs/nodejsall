const express=require("express");
const showrouter=express.Router();
const {toLowerCaseString,justADummyMidleware}=require("../middlewares/showmiddleware");

// routes level middleware



showrouter.use(toLowerCaseString);
showrouter.use(justADummyMidleware);


showrouter.post("/",(req,res,next)=>{

    console.log(req.body);
    //res.json("Show router root route");
    next();

})

showrouter.post("/a",(req,res,next)=>{

    console.log(req.body);
    //res.json("show Router A route")
    next();

})



module.exports=showrouter;

