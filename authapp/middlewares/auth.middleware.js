const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken");

const encryptPassword=(req,res,next)=>{
    const myPlaintextPassword=req.body.password;
    const saltRounds = 5;
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
   
        req.body.password=hash
        next();
       
     
    });



}


const authenticateMiddleware=(req,res,next)=>{
    const headers=req.headers;
   if(headers.authorization){
    jwt.verify(headers.authorization, process.env.SECRET, function(err, decoded) {
        if(err){
            res.json({
                message:"Wrong token or Token Malformed"
            })

        } else{

            next();
        }
         
       
      });
       


 

   }
   else{

    res.json({
        message:"Forbidden,You are not allowed to access the resource"
    })
   }





}

module.exports={
    encryptPassword,
    authenticateMiddleware

}