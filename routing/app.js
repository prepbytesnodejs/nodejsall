const express=require("express");// we import express module
const myrouter=require("./routes/app.route");
const authrouter =require("./routes/auth.route");

// /auth/login
// /auth/signup

const app=express();

app.use(myrouter);
app.use("/auth",authrouter);



//module object -->global object
// starting up express app server in port 8080
app.listen(8000,()=>{
    console.log("Server Is Running");
})