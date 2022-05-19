const express=require("express");// we import express module

const authrouter=express.Router();



authrouter.get("/login",(req,res)=>{
    res.send("<h1>Login Page</h1>")
})



authrouter.get("/signup",(req,res)=>{
    res.send("<h1>Signup Page</h1>")
})

module.exports=authrouter;