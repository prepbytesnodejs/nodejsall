const express=require("express");
const port=9000;
const app=express();
const authrouter=require("./routes/auth.routes");
const cors=require("cors");

app.use(cors());
app.use(express.json());

app.use("/auth",authrouter)





app.listen(port,()=>{
    console.log(`Server Running At port ${port}`)
})