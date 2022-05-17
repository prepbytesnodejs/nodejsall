const express=require("express");// it will load the express package in our app

const app=express();
const port=9090;

app.set('view engine','ejs');

app.get("/template",(req,res)=>{

    //res.send() // res.sendFile();
    const localVariable="SOmething in here";  // from anywhere // it can be from database

    res.render("home",{title:localVariable})  // specifically designed for template engines

})



app.listen(port,()=>{
    console.log(`Server Running At Port  ${port}`)
})