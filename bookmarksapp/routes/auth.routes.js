const express=require("express");
const authrouter=express.Router();


// the array would contain all the registered users
const userArray=[

]



authrouter.post("/signup",(req,res)=>{

    userArray.push(req.body);
    console.log(req.body);

    res.json({
        message:"Success",
        
    })



})

authrouter.get("/users",(req,res)=>{



    res.json({
        message:"Success",
        users:userArray
        
    })



})


module.exports=authrouter;