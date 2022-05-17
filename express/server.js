const express=require("express");// it will load the express package in our app
const path=require("path");

const cors=require("cors");

const port=9090;
// Creating app object 
const app=express();
app.use(cors());

//one of the syntax to use a middleware is 

app.use(express.json())  //   // for json data  app level middleware  // bodyparser




app.use(express.urlencoded({extended:false}))  // for url encoded data

app.use(express.static("public"))  // this is used for serving static resources like html /css /js /images/videos



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
   console.log(process.argv);  //C/Dee

   const filePath=path.join(__dirname+"/views/home.html") // the absolute path of my file

    //res.send();
    res.sendFile(filePath);

})


app.post("/postroute",(req,res)=>{


    console.log(req.body);// for post request you will receive data in req.body
    ///
    // How to get data from post request 

    // Middlewares --->

    ///

    res.json(req.body);




})



app.get("/album",(req,res)=>{


 
    const filePath=path.join(__dirname+"/views/album.html") // the absolute path of my file

    const heading="My new Page";  // this data can be anything --->it can be something which you are getting from database
 
     //res.send();
     res.sendFile(filePath);
 
 })

 // Template engines -->


 app.get("/template",(req,res)=>{

    const menuitems=[
        "About Us",
        "Login",
        "Signup",
        "Contactu"
    ]
    let html=""

 menuitems.forEach(ele=>(
     html+=`   <li class="nav-item">
     <a class="nav-link active" aria-current="page" href="#">${ele}</a>

   </li>`


    ))

    res.send(`
    
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          ${html}
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`)
 })


// time to start a server 

// handle bars 

// ejs 

//callback to promise    // I am modifying my server.js
app.listen(port,()=>{
    console.log(`Server Running At Port  ${port}`)
})