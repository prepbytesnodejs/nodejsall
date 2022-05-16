const express=require("express");// it will load the express package in our app
const path=require("path");

const port=9090;
// Creating app object 
const app=express();

//const app=require("express")();


//Route creation

app.get("/",(req,res,next)=>{

    //res.send();  --->res.write + res.end();
    // res.sendFile();
    // res.render();
    // res.json();
   // res.send("Hello world");
   //res.send("<h1>HEllo world</h1>")  // html as well
   res.send({
       name:"John",
       age:99
   })

})



// Query Paramater Example
app.get("/user",(req,res,next)=>{

    // two different kinds of get request parameters 

    // query param //query string
    // path params

    console.log(req.query);
    //const name=req.query.name
    //const age=req.query.age
    //const address=req.query.address
    const {name,age,address}=req.query;
    //



   //res.send("Hey " + name + " You are of age" + age + "You live in " + address);
   res.send(`Hey  there   ${name}   you are of age ${age} and you live in ${address} `)
  

})

// Path params
// route params


app.get("/admin/:id?/:name?",function(req,res){
  
    const paramData=req.params.id;
    console.log(paramData);
    const name=req.params.name;
    console.log(name);

    res.send("hello there");
})
///C:\Users\Prem Pratap\PrepBytes\NodeJs\Server.js

// C:/Users/Downloads/pppp

app.get("/html",(req,res)=>{

   // console.log(path);

   console.log(__dirname);
   console.log(process.argv);

   const filePath=path.join(__dirname+"/views/home.html") // the absolute path of my file

    //res.send();
    res.sendFile(filePath);

})


app.post("/postroute",(req,res)=>{

    // How to get data from post request 

    // Middlewares --->

    ///

    res.json("This is a post route");




})


// time to start a server 

//callback to promise    // I am modifying my server.js
app.listen(port,()=>{
    console.log(`Server Running At Port  ${port}`)
})