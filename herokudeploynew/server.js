require('dotenv').config()  //it adds the env variables to the process env object
const express=require("express");
const app=express();
const port=process.env.PORT || 9000;



const approuter=require("./routes/app.route");


app.use("/",approuter)



app.listen(port,()=>{
    console.log("Server running  at port !! "+ port);
})


