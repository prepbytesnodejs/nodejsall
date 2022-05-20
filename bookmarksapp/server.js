const express=require("express");
const port=9000;
const app=express();
const authrouter=require("./routes/auth.routes");
const bookmarksrouter=require("./routes/bookmark.routes");
const showrouter=require("./routes/show.routes");
const cors=require("cors");
const {loggingMiddleware,commonResponseMiddleware} =require("./middlewares/applevelmiddleware");

// app level middleware -->



app.use(cors());
app.use(express.json());

app.use("/auth",authrouter);

app.use("/bookmark",bookmarksrouter);

app.use("/show",showrouter);

app.use(commonResponseMiddleware);





app.listen(port,()=>{
    console.log(`Server Running At port ${port}`)
})