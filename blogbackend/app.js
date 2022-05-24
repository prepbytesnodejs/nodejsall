const express=require("express");
const app=express();
const port=process.env.PORT || 9000
const homerouter=require("./routes/home.route");
const cors=require("cors");


app.use(cors());


app.use("/",homerouter)

app.listen(port,function(){
    console.log(`Server Running at port ,${port}` );
})