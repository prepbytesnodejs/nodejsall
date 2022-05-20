const express=require("express");
const bookmarkrouter=express.Router();

// route level middleware

const {convertToUpperCase,encryptPassword} =require("../middlewares/middleware");




bookmarkrouter.post("/",convertToUpperCase,encryptPassword,(req,res)=>{

    console.log(req.body);
    res.json("Bookmarks")

})



module.exports=bookmarkrouter;

