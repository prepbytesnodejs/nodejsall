const express=require("express");// it will load the express package in our app
const { v4: uuidv4 } = require('uuid');

const app=express();
const port=9090;

app.set('view engine','ejs');


// global variable
let  data=[
    {
      "_id": "6284fb0ff503a9e22b4de50e",
      "name": "Renee Boyle",
      "address": "921 Chauncey Street, Lupton, New Jersey, 9542"
    },
    {
      "_id": "6284fb0f9c3e3d5e49d611b7",
      "name": "Tillman Mcmillan",
      "address": "679 Alabama Avenue, Harold, Massachusetts, 2156"
    },
    {
      "_id": "6284fb0f7d8ff81e30b4508f",
      "name": "Henry Robertson",
      "address": "964 Elliott Walk, Northridge, Northern Mariana Islands, 9728"
    },
    {
      "_id": "6284fb0f79dcfd5a52a77a18",
      "name": "Cobb Myers",
      "address": "275 Hunts Lane, Winchester, Illinois, 4115"
    },
    {
      "_id": "6284fb0f833ec0af9b55adf1",
      "name": "Consuelo Haley",
      "address": "877 Indiana Place, Shrewsbury, American Samoa, 2280"
    },
    {
      "_id": "6284fb0fe5b4f24bce68f245",
      "name": "Mcleod Sharp",
      "address": "561 Stockton Street, Sanborn, Minnesota, 8308"
    },
    {
      "_id": "6284fb0ffbd956686898ad8c",
      "name": "Addie Cohen",
      "address": "557 Conklin Avenue, Guthrie, Vermont, 3867"
    },
    {
      "_id": "6284fb0faf59b9b50569a264",
      "name": "Wright Juarez",
      "address": "341 Sapphire Street, Trexlertown, Nebraska, 8371"
    },
    {
      "_id": "6284fb0fe2aa098e8a5e939a",
      "name": "Brennan Gardner",
      "address": "754 Norwood Avenue, Valle, North Dakota, 7937"
    },
    {
      "_id": "6284fb0f0a9c63f049143437",
      "name": "Chen Bush",
      "address": "378 Monument Walk, Beason, Puerto Rico, 5069"
    },
    {
      "_id": "6284fb0f30175dc186c6d771",
      "name": "Holman Mendez",
      "address": "870 Clymer Street, Marbury, Maryland, 9411"
    },
    {
      "_id": "6284fb0f5c43bc8baf1f1e50",
      "name": "Yvonne Meyer",
      "address": "497 Chester Avenue, Foscoe, Idaho, 7987"
    },
    {
      "_id": "6284fb0fd04351559a013aea",
      "name": "Essie Jones",
      "address": "773 Batchelder Street, Heil, Delaware, 5614"
    },
    {
      "_id": "6284fb0f1d0e6ba81acb418c",
      "name": "Caroline Andrews",
      "address": "116 McDonald Avenue, Graball, Utah, 4486"
    },
    {
      "_id": "6284fb0f9dbb180c16f00ba6",
      "name": "Beard Flynn",
      "address": "417 Lincoln Terrace, Vandiver, Kentucky, 6590"
    },
    {
      "_id": "6284fb0fb5dc46bc5208302a",
      "name": "Nora Munoz",
      "address": "349 Delmonico Place, Johnsonburg, Texas, 267"
    }
  ]


app.use(express.urlencoded({extended:false}))  // for url encoded data

app.get("/template",(req,res)=>{

    //res.send() // res.sendFile();

   
   

    res.render("home",{response:data})  // specifically designed for template engines

})


app.get("/adduser",(req,res)=>{

    res.render("add")
})

app.post("/submitform",(req,res)=>{

    console.log(req.body.name);
    req.body._id=uuidv4(); 

    data.push(req.body);  // this would be replaced by database queries --->

   

    res.redirect("/template")   // it just redirects us to another route ---->

})

// Delete route

// This what we called as rest api 

app.delete("/delete/:id",(req,res)=>{

  const id=req.params.id;

  data=data.filter(ele=>ele._id!=id);  // it will filter out all the records except that we are deleting

  res.json({
    message:"SuccesFully Deleted"
  })

})


app.listen(port,()=>{
    console.log(`Server Running At Port  ${port}`)
})