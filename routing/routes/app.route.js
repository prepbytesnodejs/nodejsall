const express=require("express");// we import express module

const myrouter=express.Router();



myrouter.get("/",(req,res)=>{
    res.send("Hola")
})


module.exports=myrouter;