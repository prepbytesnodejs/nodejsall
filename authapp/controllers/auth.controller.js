require("dotenv").config();

const Users=require("../models/User");
const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');


const LoginController=(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;

    // Search for the Users in the Users array ---

    const user=Users.find(ele=>ele.username==username);  // It will be turned into databse query 
    if(user){


    bcrypt.compare(password, user.password, function(err, result) {
        // result == true
        if (result==true){

            // Generating the token

            const  token = jwt.sign({ username: username ,somerandom:"lallaala"}, process.env.SECRET);

            res.json({
                message:"Logged In SuccessFully",
                token:token
               
            })

        }
        else{
            res.json({
                message:"Wrong Password",
               
            })
        }
    });
 
    }
    else{
        res.json({
            message:"User Not found",
           
        })

    }

 

}

const SignupController=(req,res)=>{

    Users.push(req.body);


    res.json({
        message:"Signup SuccessFull"
    })

}

const UsersController=(req,res)=>{




    res.json({
      data:Users
    })

}



module.exports={
    LoginController,
    SignupController,
    UsersController

}