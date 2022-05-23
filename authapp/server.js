require("dotenv").config();
const express=require("express");
const port=process.env.PORT || 9000;
const authRouter=require("./routes/auth.route");

const app=express();
app.use(express.json());

app.use("/",authRouter);


app.listen(port,()=>{
    console.log("Server Up And running "+port);

})